import React from 'react';
import './sidebar.css';
import { Feed, Chat, VideoLibrary, Group, Bookmarks, HelpOutline, Work, Event } from '@mui/icons-material';
import {Users} from '../../dummyData'
import Friends from './friends/Friends';


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
          {Users.map(u=>(<Friends key={u.id} user={u}/>))}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
