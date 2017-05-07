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
    console.log(this.props.engagement)
    return (
      <div className="engagement">
        <div>Engagement</div>
        <div>{this.props.engagement.count_delivered}</div>
        <div>{this.props.engagement.count_unique_confirmed_opened}</div>
        <div>{this.props.engagement.count_unique_clicked}</div>
      </div>
    );
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
