import React, { Component } from 'react'
import { hashHistory } from 'react-router';

import loremIpsum from 'lorem-ipsum';
import GeoPattern from 'geopattern';
import { hacker } from 'faker';

export default function StoryBar({ title }) {
  function goToAdd() {
    hashHistory.push('/add');
  }

  const description = loremIpsum({count: 2, units: 'sentences'});
  const pattern = GeoPattern.generate(description);
  const dataUrl = pattern.toDataUrl();
  const picStyle = { backgroundImage: dataUrl }

  return (<div onClick={goToAdd} className="story-bar">
    <div className="picture" style={picStyle} />
    <div className="bar-header">
      <div className="story-title">{ title }</div>
      <div className="description">
        { mock_story() }
      </div>
    </div>
  </div>)
}

function mock_story () {
  let phrases = hacker.phrase() + ' ' + hacker.phrase()
  let noun = uppercase_noun()
  let verb = hacker.verb()
  return phrases + noun + ' ' + verb + '...'
}

function uppercase_noun () {
  let noun = hacker.noun()
  noun[0].toUpperCase() + noun.slice(1)
  return noun
}
