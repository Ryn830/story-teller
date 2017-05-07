import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { setUsername as set } from '../../reducers/username';
import StoryBar from './StoryBar'

import $ from 'jquery';
import './home.scss';

export class Home extends Component {
  componentWillMount() {
    // $.post({
    //   url: 'shareVote',
    //   dataType: 'json',
    //   contentType: 'application/json',
    //   data: JSON.stringify({
    //     campaignName: 'scott',
    //     emails: ['patientreferrals2@gmail.com']
    //   })});

    $.get({url: 'commentMetrics', dataType: 'json', contentType: 'application/json'})

    // TODO: Turn this back on later
    // const username = prompt('Username')
    // this.props.setUsername(username)
  }

  render() {
    return (
      <div className="page-container">
        {
          [1,2,3].map(function(i) {
            return (<div className="stories" key={i}>
              <StoryBar />
              <StoryBar />
              <StoryBar />
            </div>);
          })
        }
        <Link to='add'>
          Add a story
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { setUsername(name) { dispatch(set(name)) } };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
