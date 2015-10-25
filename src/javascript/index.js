import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Topics, Topic } from './http'
import Sidebar from 'ui/components/sidebar'
import Tags from 'ui/components/tags'

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tags: [],
      tag: {}
    };

    this.topics = new Topics();
    this.topic = new Topic();
  }

  componentDidMount() {
    this.topics.get().then(topics => {
      this.setState({
        tags: topics
      });
    });
  }

  tagSelected(id) {
    this.topic.get(id).then(topic => {
      this.setState({
        tag: topic
      });
    });
  }

  render() {
    return (
      <div className="topic-tag-cloud">
        <Tags tags={this.state.tags} tagSelected={this.tagSelected.bind(this)}/>
        <Sidebar tag={this.state.tag} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('react-root')
);
