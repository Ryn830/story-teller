import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Block from './block';
import Engagement from './engagement';
import Form from './form'
import Sidebar from './sidebar';
import { get_blocks } from '../actions/index'
import Navbar from './navbar';

import './add.scss';

class Add extends Component {
  render() {
    return (
      <div className="page-container add">
        <Navbar />
        <br></br>
        <h3 className='block-title'>Story Title</h3>
        <div className="story">
          {
            this.props.blocks.map((block, index) => {
              return <Block key={ index } text={ block.text } username={ this.props.username }/>
            })
          }
        </div>
        <br></br>
        <Form />
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
      blocks: state.blocks,
      username: state.username
    }
  },
  (dispatch) => {
    return bindActionCreators({ get_blocks }, dispatch)
  }
)(Add)
