import React from 'react';
import './rightbar.css';
import { Avatar, Button } from '@mui/material';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarSection">
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Array.from({ length: 5 }).map((_, index) => (
              <li className="rightbarFriend" key={index}>
                <div className="rightbarProfileImgContainer">
                  <Avatar src={`./assets/person/${index + 1}.jpeg`} className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">John Doe {index + 1}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rightbarSection">
          <h4 className="rightbarTitle">Suggestions for You</h4>
          <div className="rightbarSuggestion">
            <Avatar src="./assets/person/6.jpeg" className="rightbarProfileImg" />
            <div className="rightbarSuggestionInfo">
              <span className="rightbarUsername">Jane Doe</span>
              <Button variant="contained" color="primary" className="rightbarFollowButton">Follow</Button>
            </div>
          </div>
          <div className="rightbarSuggestion">
            <Avatar src="./assets/person/7.jpeg" className="rightbarProfileImg" />
            <div className="rightbarSuggestionInfo">
              <span className="rightbarUsername">Alex Smith</span>
              <Button variant="contained" color="primary" className="rightbarFollowButton">Follow</Button>
            </div>
          </div>
        </div>

        <div className="rightbarSection">
          <h4 className="rightbarTitle">Sponsored</h4>
          <img src="./assets/ad/ad1.jpeg" alt="Ad" className="rightbarAd" />
          <img src="./assets/ad/ad2.jpeg" alt="Ad" className="rightbarAd" />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
