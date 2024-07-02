import React from 'react';
import './share.css';
import { Avatar, Button } from '@mui/material';
import { PhotoLibrary, EmojiEmotions, Room, LocalOffer } from '@mui/icons-material';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Avatar src="/path/to/profile.jpg" alt="Profile" className="shareAvatar" />
          <input
            placeholder="What's on your mind?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareOptions">
          <div className="shareOption">
            <PhotoLibrary htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo/Video</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feeling/Activity</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <LocalOffer htmlColor="darkorange" className="shareIcon" />
            <span className="shareOptionText">Tag Friends</span>
          </div>
        </div>
        <hr className="shareHr" />
        <Button variant="contained" className="shareButton">Share</Button>
      </div>
    </div>
  );
};

export default Share;
