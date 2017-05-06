import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Add extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          Home
        </Link>
        <div>
          Story content
        </div>
        <div>
          Create next block
        </div>
      </div>
    );
  }
}

export default connect()(Add)
