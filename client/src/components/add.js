import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hacker } from 'faker'

import Block from './block';
import Engagement from './engagement';
import Sidebar from './sidebar';
import { get_blocks, add_block } from '../actions/index'
import Navbar from './navbar';
import { setUsername } from '../reducers/username';

import './add.scss';
import './form.scss';

class Add extends Component {
  constructor () {
    super()
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
  generate (e) {
    e.preventDefault()
    let noun = hacker.noun()
    noun = noun[0].toUpperCase() + noun.slice(1)
    this.setState({
      pre: hacker.phrase(),
      content: hacker.phrase(),
      post: noun + ' ' + hacker.verb() + '...'
    })
  }

  componentWillMount() {
    this.props.setUsername(Math.floor(Math.random() * 400000))
  }

  render() {
    return (
      <div className="page-container add">
        <Navbar />
        <br></br>
        <div className="header">
          <div className='block-title'>The Next Silicon Valley</div>
          <div className="author">
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/013/259/15145de.jpg"/>
            <div className="info">
              Scott Zhang
            </div>
          </div>
        </div>
        <div className="cover"></div>
        <div className="story-container">
          <div className="story">
            {
              this.props.blocks.map((block, index) => {
                return <Block key={ index } pre={ block.pre } content={ block.content } post={ block.post } username={ this.props.username }/>
              })
            }
          </div>
          <div className='story'>
            <div className="block-container">
            <div className="text-container">
              { this.state.pre } { this.state.content } { this.state.post }
            </div>
            <div className="right-bar"></div>
            </div>
          </div>
          <div className='form'>
            <form onSubmit={ this.submit.bind(this) } className='form-group'>
              <div>
                <div>
                  <textarea cols="50" rows="3" value={ this.state.pre } onChange={ this.updatePre.bind(this) } placeholder='Complete the sentence from the previous story.'></textarea>
                </div>
                <div>
                  <textarea cols="50" rows="3" value={ this.state.content } onChange={ this.updateContent.bind(this) } placeholder='What direction do you want to move the story in?'></textarea>
                </div>
                <div>
                  <textarea cols="50" rows="3" value={ this.state.post } onChange={ this.updatePost.bind(this) } placeholder='Now leave a sentence to be completed.'></textarea>
                </div>
                <input type="submit" value="Submit" />
                <button onClick={(e) => { this.generate(e) }}>Generate Random Responses</button>
              </div>
            </form>
          </div>
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
      blocks: state.blocks,
      username: state.username
    }
  },
  (dispatch) => {
    return bindActionCreators({ get_blocks, add_block, setUsername }, dispatch)
  }
)(Add)
