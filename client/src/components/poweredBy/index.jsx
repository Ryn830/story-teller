import React, { Component } from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router'

import './poweredBy.scss';

export class PoweredBy extends Component {
  render() {
    return (
      <div className="page-container powered-by">
        <Navbar />
        <div className="content">
          <div className="heading">
            SillyStoryStitcher
          </div>
          <div className="team">
            <div className="heading-2">The team</div>
            <div className="member">
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAEdAAAAJGQ3NTM2OWViLTYzYzYtNDY5MC05ZTViLTYwYzE0NzIyYjJkMg.jpg"/>
              <div>Sol Chea</div>
            </div>
            <div className="member">
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALdAAAAJGQyMmZjZmIyLTZiOTAtNDE4NC1iN2NlLTMwYzNhNjhiODQ1Yg.jpg"/>
              <div>Ryan Yee</div>
            </div>
            <div className="member">
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/013/259/15145de.jpg"/>
              <div>Scott Zhang</div>
            </div>
          </div>
          <div className="sponsors">
            <div className="heading-2">The tech we used</div>
            <div>
              <img src="http://naywinmyint.com/content/images/2016/11/loopback-1.png"/>
              <img src="https://developers.sparkpost.com/images/sparkpost-facebook.png"/>
            </div>
            <div>
              <img src="http://cse360fall14.wikispaces.asu.edu/file/view/amazon-ec2.png/524161010/amazon-ec2.png"/>
              <img src="http://4.bp.blogspot.com/-GNkavwYUIw8/VqBQurjWORI/AAAAAAAAGHs/A-e9MU0qwbY/s1600/DynamoDB%2B%252B%2BAmazon%2BWeb%2BServices.png"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PoweredBy;
