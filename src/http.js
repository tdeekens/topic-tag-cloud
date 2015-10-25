import ranges, { within } from 'ranges';

/**
 * @class Http
 * @classdesc Helper class wrapping a baseUri.
 *
 * @param {String} uri being the root for all resources.
 */
class Http {
  constructor(uri) {
    this.uri = uri;
  }

  /**
   * Performs a fetch request to the rootUri with the given resource.
   *
   * @return {Promise} promise yieling the response.
   */
  get(resource) {
    // Relies on the new fetch API (polyfill if needed).
    return fetch(`${this.uri}/${resource}`);
  }
}

/**
 * @class Topics
 * @classdesc Resource representing the Topics.
 *
 * @param {String} uri being the root for all requests.
 * @param {String} extension being a potential extension for requests.
 */
export class Topics {
  constructor(uri = `http://localhost:3000`, extension = '') {
    this.http = new Http(uri);
    this.extension = extension;
  }

  /**
   * Transforms a raw backend response to augment a topic with
   * with its importance and omit idle fields.
   *
   * Note:
   *   Consider this private it will be tested with the get()-fn.
   *
   * @param {Array} raw topics from the backend (fixture in this case).
   * @return {Array} An array transformed topics with e.g. importance
   */
  transform(raw) {
    let
      volumes = raw.map(topic => { return topic.volume }),
      groupedVolumes = ranges(volumes, 6),
      // Map all raw entries for transformations
      topics = raw.map(entry => {
        return {
          id: entry.id,
          label: entry.label,
          volume: entry.volume,
          importance: within(groupedVolumes, entry.volume),
          sentiment: entry.sentimentScore
        };
      });

    return topics;
  }

  /**
   * Fetches all topics from the backend while yieling the transformed
   * results.
   *
   * @return {Promise} promise yieling the transformed resource's response.
   */
  get() {
    return new Promise((resolve, reject) => {
      this.http.get(`topics${this.extension}`).then(response => {
        response.json().then(data => {
          resolve(this.transform(data));
        });
      });
    });
  }
}

/**
 * @class Topic
 * @classdesc Resource representing a Topic.
 *
 * @param {String} uri being the root for all requests.
 * @param {String} extension being a potential extension for requests.
 */
export class Topic {
  constructor(uri = `http://localhost:3000`, extension = '') {
    this.http = new Http(uri);
    this.extension = extension;
  }

  /**
   * Transforms a raw backend response to omit idle fields.
   *
   * @param {Object} raw topic from the backend (fixture in this case).
   * @return {Object} An transformed topic.
   */
  transform(raw) {
    let
      topic = {
        id: raw.id,
        label: raw.label,
        volume: raw.volume,
        sentiment: {
          negative: raw.sentiment.negative,
          positive: raw.sentiment.positive,
          neutral: raw.sentiment.neutral,
          total: raw.sentiment.neutral + raw.sentiment.positive + raw.sentiment.negative
        }
      };

    return topic;
  }

  /**
   * Fetches a topic from the backend while yieling the transformed
   * result.
   *
   * Note:
   *   Consider this private it will be tested with the get()-fn.
   *
   * @return {Promise} promise yieling the transformed resource's response.
   */
  get(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`topic/${id}${this.extension}`).then(response => {
        response.json().then(data => {
          resolve(this.transform(data));
        });
      });
    });
  }
}
