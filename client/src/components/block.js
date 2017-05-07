import React, { Component } from 'react'
import $ from 'jquery';
import Engagement from './engagement';

export default class Block extends Component {
  constructor() {
    super(arguments)
    this.state = {
      showShare: false,
      showMetrics: false
    }
  }

  sendEmails = () => {
    const emails = prompt('Who do you want to share with?');

    $.post({
      url: 'shareVote',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        campaignName: this.props.username,
        text: this.props.content,
        emails: [emails]
      })
    });
    this.setState({showShare: false})
  }

  render() {
    const { content, post, username, pre } = this.props;

    return (
      <div className="block-container">
        <div className="text-container">
          { pre } { content } { post }
        </div>
        <div className="right-bar">
          <div className="text">
            <div className="stats-block">
              <div>
                <i onClick={() => {this.setState({showMetrics: true})}} className="fa fa-heart"></i>
                { this.state.showMetrics &&
                  <Engagement username={this.props.username}/>
                }
              </div>
              <div>
                <i onClick={this.sendEmails} className="fa fa-share"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
