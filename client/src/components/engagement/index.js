import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchEngagement } from '../../reducers/engagement';

import './engagement.scss';

class Engagement extends Component {
  static propTypes = {
    getMetrics: PropTypes.func.isRequired,
    segmentId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    metrics: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { getMetrics, username, storyId } = this.props;

    getMetrics(username, storyId);
  }

  render() {
    return (
      <div className="engagement">
        <div>Engagement</div>
        <div>12</div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return { engagement: {} };
}

function mapDispatchToProps(dispatch) {
  return {
    getMetrics(id) { fetchEngagement(id) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Engagement);
