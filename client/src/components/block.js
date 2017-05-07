import React, { Component } from 'react'
import $ from 'jquery';

export default class Block extends Component {
  constructor() {
    super(arguments)
    this.state = {
      showShare: false,
      showMetrics: false
    }
  }

  displayMetrics = () => {
    alert('This post is quite engaging! 64% of people who this segment is shared with return to read the full story')
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
                <i onClick={this.displayMetrics} className="fa fa-thermometer-three-quarters"></i>
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
