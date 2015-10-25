import { Topics, Topic } from '../../src/javascript/http';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

var
  fixturesUri = 'base/mocks/fixtures';

describe('Topics', () => {
  describe('get', () => {
    it('should resolve the promise when getting topics', () => {
      let
        topics = new Topics(fixturesUri, '.json');

      topics.get().should.be.fulfilled;
    });

    it('should extract a set of properties from the backend `fixture`', () => {
      let
        topics = new Topics(fixturesUri, '.json');

      topics.get().then(topics => {
        topics.forEach(topic => {
          topic.id.should.be.defined;
          topic.label.should.be.defined;
          topic.volume.should.be.defined;
          topic.sentiment.should.be.defined;
        });
      });
    });

    it('should augment the data with a `importance` property', () => {
      let
        topics = new Topics(fixturesUri, '.json');

      topics.get().then(topics => {
        topics.forEach(topic => {
          topic.importance.should.be.defined;
        })
      });
    });
  });
});

describe('Topic', () => {
  describe('get', () => {
    it('should resolve the promise when getting a topic', () => {
      let
        topic = new Topic(fixturesUri, '.json');

      topic.get('1751295897__DJ').should.be.fulfilled;
    });

    it('should extract a set of properties from the backend `fixture`', () => {
      let
        topic = new Topic(fixturesUri, '.json');

      topic.get('1751295897__DJ').then(topic => {
        topic.id.should.be.defined;
        topic.label.should.be.defined;
        topic.volume.should.be.defined;
        topic.sentiment.should.be.defined;

        topic.sentiment.positive.should.be.defined;
        topic.sentiment.negative.should.be.defined;
        topic.sentiment.neutral.should.be.defined;
      });
    });
  });

  it('should handle unset fields within a sentiment from a `fixture`', () => {
    let
      topic = new Topic(fixturesUri, '.json');

    topic.get('1751295897__DB_Presents').then(topic => {

      topic.sentiment.should.be.defined;

      topic.sentiment.positive.should.be.defined;
      topic.sentiment.negative.should.be.defined;
      topic.sentiment.neutral.should.be.defined;
    });
  });
});
