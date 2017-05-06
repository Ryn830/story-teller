import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Engagement from './engagement';
import Form from './form'
import { get_blocks } from '../actions/index'

class Add extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          Home
        </Link>
        <div>
          {
            this.props.blocks.map((block, index) => {
              return <span key={ index }>{ block.text }</span>
            })
          }
        </div>
        <div>
          <Form />
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.props.get_blocks()
  }
}

export default connect(
  (state) => {
    return {
      blocks: state.blocks
    }
  },
  (dispatch) => {
    return bindActionCreators({ get_blocks }, dispatch)
  }
)(Add)
