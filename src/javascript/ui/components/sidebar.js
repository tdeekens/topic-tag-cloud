import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { colorFor } from '../../sentiments'

/**
 * @class Sidebar
 * @classdesc React component rendering the sidebar for a tag.
 *
 * @param {Object} props according to proptyes
 */
class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { tag } = this.props;
    let
      information,
      element;

    // tag label means rendering detailed information
    if (tag.label) {
      let
        classNameRoot = 'topic-tag-cloud-sidebar-information-mentions topic-tag-cloud-sidebar-information-mentions';

      information = (
        <div className="topic-tag-cloud-sidebar-information">
          <h1>{tag.label}</h1>
          <ul>
            <li>
              Total Mentions:
              <span
                className={classnames(`${classNameRoot}_${colorFor(tag.volume)}`)}>
                {tag.volume}
              </span>
            </li>
            <li>
              Positive Mentions:
              <span
                className={classnames(`${classNameRoot}_${colorFor(tag.sentiment.positive)}`)}>
                 {tag.sentiment.positive}
              </span>
            </li>
            <li>
              Neutral Mentions:
              <span
                className={classnames(`${classNameRoot}_${colorFor(tag.sentiment.neutral)}`)}>
                {tag.sentiment.neutral}
              </span>
            </li>
            <li>
              Negative Mentions:
              <span
                className={classnames(`${classNameRoot}_${colorFor(tag.sentiment.negative)}`)}>
                {tag.sentiment.negative}
              </span>
            </li>
          </ul>
        </div>
      );
    } else {
      // otherwise show user to select something
      information = (
        <div className="topic-tag-cloud-sidebar-information topic-tag-cloud-sidebar-information_empty">
          Please select a tag within the cloud to display more information.
        </div>
      );
    }

    element = (
     <div
       className={classnames(
         `topic-tag-cloud-sidebar`,
       )}>
       { information }
     </div>
   );

    return element;
  }
}

Sidebar.propTypes = {
  tag: PropTypes.object.isRequired,
};

export default Sidebar;
