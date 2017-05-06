import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
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
