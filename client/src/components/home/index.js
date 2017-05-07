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
    this.props.fetchStories();
  }

  render() {
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
