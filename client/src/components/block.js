import React, { Component } from 'react'

export default function Block({ text }) {
  return (
    <div className="block-container">
      <div className="left-bar"></div>
      <div className="text-container">
        { text }
      </div>
      <div className="right-bar">Stats</div>
    </div>
  )
}
