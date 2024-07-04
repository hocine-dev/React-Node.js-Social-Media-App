import React from 'react';
import './profile.css'

const Profile = () => {
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

    </div>
  );
};

export default Profile;
