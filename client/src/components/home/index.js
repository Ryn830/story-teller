import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { setUsername } from '../../reducers/username';
import { fetchStories } from '../../reducers/stories';
import StoryBar from './StoryBar'
import Navbar from '../navbar';

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

    this.props.fetchStories();

    // TODO: Turn this back on later
    // const username = prompt('Username')
    // this.props.setUsername(username)
  }

  render() {
    console.log(this.props.stories)
    return (
      <div className="page-container">
        <Navbar />
        <div className="stories">
          {
            this.props.stories && this.props.stories.map(function(story, i) {
              return (<StoryBar title={story.title} key={i} />);
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return { stories: state.stories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStories, setUsername }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
