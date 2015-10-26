import React, { Component, PropTypes } from 'react';
import { Topics, Topic } from '../../http'
import Sidebar from '../components/sidebar'
import Tags from '../components/tags'

/**
 * @class TagCloud
 * @classdesc React component rendering a tagcloud with tags and sidebar.
 *
 * @param {Object} props according to proptyes (uri to backend)
 */
class TagCloud extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tags: [],
      tag: {
        id: ''
      }
    };

    this.topics = new Topics(this.props.uri);
    this.topic = new Topic(this.props.uri);
  }

  componentDidMount() {
    this.topics.get().then(topics => {
      this.setState({
        tags: topics
      });
    });
  }

  tagSelected(id) {
    // Fetch data from backend and set state
    this.topic.get(id).then(topic => {
      this.setState({
        tag: topic
      });
    });
  }

  render() {
    return (
      <div className="topic-tag-cloud u-3d">
        <Tags tags={this.state.tags} selectedTagId={this.state.tag.id} tagSelected={this.tagSelected.bind(this)}/>
        <Sidebar tag={this.state.tag} />
      </div>
    );
  }
}

TagCloud.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default TagCloud;
