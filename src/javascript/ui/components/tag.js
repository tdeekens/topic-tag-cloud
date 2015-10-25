import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { colorFor } from '../../sentiments'

class Tag extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleClick() {
    this.props.tagSelected(this.props.tag.id);
  }

  render() {
    const { tag, tagSelected } = this.props;

    let
      element = (
        <div
          className={classnames(
            `topic-tag-cloud-tags-tag`,
            `topic-tag-cloud-tags-tag_importance-${tag.importance}`,
            `topic-tag-cloud-tags-tag_sentiment-${colorFor(tag.sentiment)}`
          )}
          onClick={this.handleClick.bind(this)}>
          {tag.label}
        </div>
      );

    return element;
  }
}

Tag.propTypes = {
  tag: PropTypes.object.isRequired,
  tagSelected: PropTypes.func.isRequired
};

export default Tag;
