import React, { Component } from 'react'

export default function StoryBar({ title }) {
  return (<div to='/add' className="story-bar">
    <div className="bar-header">
      <div className="picture" />
      <div className="story-title">{ title }</div>
    </div>
    <div>
      HERE IS A TITLE THAT IS QUITE LONG AT TIMES BUT CAN BE SHORTER
    </div>
  </div>)
}
