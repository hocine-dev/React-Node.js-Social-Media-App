import React from 'react';
import Avatar from '@mui/material/Avatar';
import './profile.css'; // Import the CSS file

const UserProfile = () => {
  return (
    <div className="userProfileContainer">
      <div className="profileCover">
        <img className="coverImage" src="./assets/post/1.jpeg" alt="Cover" />
        <div className="profileDetails">
          <Avatar src="./assets/person/1.jpeg" alt="Profile" className="profileAvatar" />
        </div>
      </div>
      <div className="profileInfo">
        <div className="profileUsername">Safak Kocaoglu</div>
        <div className="profileDescription">Hello my friends!</div>
      </div>
    </div>
  );
};

export default UserProfile;
