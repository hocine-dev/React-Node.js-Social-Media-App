import React from 'react'
import { Avatar } from '@mui/material';


const Friends = ({user}) => {
  return (
    
        <div key={user.id} className="friend">
          <Avatar src={user.profilePicture} alt={`Friend ${user.username}`} className="friendAvatar" />
          <p>{user.username}</p>
        </div>
    
  )
}

export default Friends