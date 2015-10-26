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
      information = (
        <div className="topic-tag-cloud-sidebar-information">
          <h1>{tag.label}</h1>
          <ul>
            <li>Total Mentions: <span>{tag.volume}</span></li>
            <li>Positive Mentions: <span className={classnames(`topic-tag-cloud-sidebar-information_${colorFor(tag.sentiment)}`)}>{tag.sentiment.positive}</span></li>
            <li>Neutral Mentions: <span className={classnames(`topic-tag-cloud-sidebar-information_${colorFor(tag.sentiment)}`)}>{tag.sentiment.neutral}</span></li>
            <li>Negative Mentions: <span className={classnames(`topic-tag-cloud-sidebar-information_${colorFor(tag.sentiment)}`)}>{tag.sentiment.negative}</span></li>
          </ul>
        </div>
      );
    } else {
      // otherwise show user to select something
      information = (
        <div>
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
