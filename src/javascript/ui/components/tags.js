import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Tag from 'ui/components/tag'

/**
 * @class Tags
 * @classdesc React component rendering tags.
 *
 * @param {Object} props according to proptyes (tags itself and selection callback)
 */
class Tags extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      tags,
      tagSelected,
      selectedTagId
    } = this.props;

    let
      element = (
        <div
          className={classnames(
            `topic-tag-cloud-tags`
          )}>
          {tags.map(tag =>
            <Tag key={tag.id} selectedTagId={selectedTagId} tag={tag} tagSelected={tagSelected} />
          )}
        </div>
      );

    return element;
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  selectedTagId: PropTypes.string.isRequired,
  tagSelected: PropTypes.func.isRequired
};

export default Tags;
