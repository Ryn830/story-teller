import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { setUsername as set } from '../../reducers/username';
import StoryBar from './StoryBar'

import './home.scss';

export class Home extends Component {
  componentWillMount() {
    // TODO: Turn this back on later
    // const username = prompt('Username')
    // this.props.setUsername(username)
  }

  render() {
    return (
      <div>
        Stories
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
