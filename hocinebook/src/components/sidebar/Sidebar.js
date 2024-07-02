import React from 'react';
import './sidebar.css';
import { Avatar } from '@mui/material';
import { Feed, Chat, VideoLibrary, Group, Bookmarks, HelpOutline, Work, Event, School } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="options">
        <div className="option">
          <Feed className="icon" />
          <p>Feed</p>
        </div>
        <div className="option">
          <Chat className="icon" />
          <p>Chats</p>
        </div>
        <div className="option">
          <VideoLibrary className="icon" />
          <p>Videos</p>
        </div>
        <div className="option">
          <Group className="icon" />
          <p>Groups</p>
        </div>
        <div className="option">
          <Bookmarks className="icon" />
          <p>Bookmarks</p>
        </div>
        <div className="option">
          <HelpOutline className="icon" />
          <p>Questions</p>
        </div>
        <div className="option">
          <Work className="icon" />
          <p>Jobs</p>
        </div>
        <div className="option">
          <Event className="icon" />
          <p>Events Courses</p>
        </div>
      </div>

      <div className="showMore">
        <p>Show More</p>
      </div>

      <div className="friends">
        <p className="sectionTitle">Friends</p>
        <div className="friendList">
          {dummyFriends.map((friend, index) => (
            <div key={index} className="friend">
              <Avatar src={`/assets/person/${index + 1}.jpeg`} alt={`Friend ${index + 1}`} className="friendAvatar" />
              <p>{friend}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const dummyFriends = [
  'John Doe',
  'Jane Smith',
  'Michael Johnson',
  'Emily Brown',
  'David Lee',
  'Sarah Wilson',
  'James Garcia',
  'Jennifer Martinez',
  'Robert Davis',
  'Lisa Rodriguez'
];

export default Sidebar;
