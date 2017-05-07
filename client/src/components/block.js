import React, { Component } from 'react'

export default function Block({ pre, content, post, username }) {
  return (
    <div className="block-container">
      <div className="left-bar"></div>
      <div className="text-container">
        { pre } { content } { post }
      </div>
      <div className="right-bar">
        <div className="text">
          Stats
          <div className="stats-block">
            <i className="fa fa-heart"></i>
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
