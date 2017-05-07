import React, { Component } from 'react'

export default function Block({ text }) {
  return (<div className="block-container">
    <div className="text-container">
      { text }
    </div>
    <div className="sidebar-content">Stats</div>
  </div>)
}
