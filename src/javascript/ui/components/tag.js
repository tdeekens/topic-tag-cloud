import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { colorFor } from '../../sentiments'

/**
 * @class Sidebar
 * @classdesc React component rendering a tag itself.
 *
 * @param {Object} props according to proptyes (tag itself and selection callback)
 */
class Tag extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleClick() {
    this.props.tagSelected(this.props.tag.id);
  }

  render() {
    const
      {
        tag,
        tagSelected,
        selectedTagId
      } = this.props,
      classNameRoot = 'topic-tag-cloud-tags-tag',
      stateClass = (selectedTagId === tag.id) ?
        `${classNameRoot}_focussed` : ``;

    let
      // generate classnames using the colorFor-fn
      element = (
        <div
          className={classnames(
            stateClass,
            `${classNameRoot}`,
            `${classNameRoot}_importance-${tag.importance}`,
            `${classNameRoot}_sentiment-${colorFor(tag.volume)}`
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
  selectedTagId: PropTypes.string.isRequired,
  tagSelected: PropTypes.func.isRequired
};

export default Tag;
