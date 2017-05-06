import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Engagement from './engagement';
import Form from './form'
import Sidebar from './sidebar';
import { get_blocks } from '../actions/index'

class Add extends Component {
  render() {
    return (
      <div className="add">
        <Link to='/'>
          Home
        </Link>
        <div>
          {
            this.props.blocks.map((block, index) => {
              return <div key={ index }>{ block.text }</div>
            })
          }
        </div>
        <div>
          <Form />
        </div>
        <Sidebar />
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
