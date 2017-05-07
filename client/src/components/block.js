import React, { Component } from 'react'

export default function Block({ text, username }) {
  return (
    <div className="block-container">
      <div className="left-bar"></div>
      <div className="text-container">
        { text }
      </div>
      <div className="right-bar">
        <div className="text">
          Stats
        </div>
      </div>
    </div>
  )
}
