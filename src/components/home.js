import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { setUsername as set } from '../reducers/username';

export class Home extends Component {
  componentWillMount() {
    const username = prompt('Username')
    this.props.setUsername(username)
  }

  render() {
    return (
      <div>
        Stories
        - A list of stories goes here
        <br></br>
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
