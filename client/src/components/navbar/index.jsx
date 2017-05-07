import React from 'react'
import { Link } from 'react-router'

import './navbar.scss';

export default function Navbar() {
  return (<div className="navbar">
    <Link to='/'>Silly Story Stitcher</Link>
  </div>)
}
