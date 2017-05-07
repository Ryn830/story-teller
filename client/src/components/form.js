import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add_block } from '../actions'

class Form extends Component {
  constructor () {
    super();
    this.state = {
      text: ''
    }
  }
  update (e) {
    this.setState({
      text: e.target.value,
    })
  }
  submit (e) {
    e.preventDefault()
    this.props.add_block({ text: this.state.text })
    this.setState({ text: '' })
  }
  render () {
    return (
      <form onSubmit={ this.submit.bind(this) }>
        <label>
          Next Block:
          <input type="text" value={ this.state.text } onChange={ this.update.bind(this) }/>
        </label>
        <input type="submit" value="Submit" />
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
