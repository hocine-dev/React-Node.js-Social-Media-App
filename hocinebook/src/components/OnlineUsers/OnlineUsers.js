import React from 'react'
import { Avatar } from '@mui/material';


const OnlineUsers = ({user}) => {
  return (
    <ul className="rightbarFriendList">
           
              <li className="rightbarFriend" key={user.id}>
                <div className="rightbarProfileImgContainer">
                  <Avatar src={user.profilePicture} className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
              </li>
           
          </ul>
  )
}

export default OnlineUsers