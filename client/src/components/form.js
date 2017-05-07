import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add_block } from '../actions'

import './form.scss';

class Form extends Component {
  constructor () {
    super();
    this.state = {
      pre: '',
      content: '',
      post: ''
    }
  }
  updatePre (e) {
    this.setState({
      pre: e.target.value,
    })
  }
  updateContent (e) {
    this.setState({
      content: e.target.value,
    })
  }
  updatePost (e) {
    this.setState({
      post: e.target.value,
    })
  }
  submit (e) {
    e.preventDefault()
    this.props.add_block({ pre: this.state.pre, content: this.state.content, post: this.state.post })
    this.setState({ pre: '', content: '', post: '' })
  }
  render () {
    return (
      <form onSubmit={ this.submit.bind(this) } className='form'>
        <div className='left'></div>
        <div className='form-group'>
          <div>
            <div>Pre:</div>
            <textarea value={ this.state.pre } onChange={ this.updatePre.bind(this) }></textarea>
          </div>
          <div>
            <div>Content:</div>
            <textarea value={ this.state.content } onChange={ this.updateContent.bind(this) }></textarea>
          </div>
          <div>
            <div>Post:</div>
            <textarea value={ this.state.post } onChange={ this.updatePost.bind(this) }></textarea>
          </div>
          <input type="submit" value="Submit" />
        </div>
        <div className='right'></div>
      </form>
    )
  }
}

export default connect(
  (state) => {
    return {}
  },
  (dispatch) => {
    return bindActionCreators({ add_block }, dispatch)
  }
)(Form)
