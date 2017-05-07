import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchEngagement } from '../../reducers/engagement';

import './engagement.scss';

class Engagement extends Component {
  componentWillMount() {
    const { getMetrics, username, storyId } = this.props;

    getMetrics(username);
  }

  render() {
    // if (typeof this.props.engagement.count_delivered === 'number') {
    //   alert('Your post is quite popular! 9 people have voted for your section')
    // }
    // return (
    //   <div />
    // );
  }
}

function mapStateToProps(state, props) {
  return { engagement: state.engagement };
}

function mapDispatchToProps(dispatch) {
  return {
    getMetrics(id) { dispatch(fetchEngagement(id)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Engagement);
