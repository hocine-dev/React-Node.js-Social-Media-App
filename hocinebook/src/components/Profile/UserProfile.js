import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';

import './profile.css'

const Profile = () => {
  const user = {
    name: "John Doe",
    city: "New York",
    relationship: "Single",
    occupation: "Software Developer",
    education: "Bachelor's Degree in Computer Science",
    interests: ["Coding", "Hiking", "Gaming"]
  };
  return (
    <div>
      <div className='header'>
      <div className="profileStyle">
  <img
    className="profileImgStyle"
    src="assets/person/5.jpeg"
    alt="Profile"
  />
</div>
</div>
<div className="contentStyle">
  <h1 className="headingStyle">Safak Kocaoglu</h1>
  <p className="paragraphStyle">Hello my friends!</p>
</div>

<div >
<Card className="user-info" sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3 }}>
      <CardContent>
      <List>
  <div className="info-container">
    <ListItem>
      <ListItemIcon>
        <LocationCityIcon />
      </ListItemIcon>
      <ListItemText primary="City" secondary={user.city} />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Relationship Status" secondary={user.relationship} />
    </ListItem>
  </div>
  <div className="info-container">
    <ListItem>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Occupation" secondary={user.occupation} />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Education" secondary={user.education} />
    </ListItem>
  </div>
  <div className="info-container">
    <ListItem>
      <ListItemIcon>
        <InterestsIcon />
      </ListItemIcon>
      <ListItemText primary="Interests" secondary={user.interests.join(', ')} />
    </ListItem>
  </div>
</List>

      </CardContent>
    </Card>
    </div>

    </div>
  );
};

export default Profile;
