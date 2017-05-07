import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Block from './block';
import Engagement from './engagement';
import Form from './form'
import Sidebar from './sidebar';
import { get_blocks } from '../actions/index'

import './add.scss';

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
              return <Block key={ index } text={block.text} />
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
