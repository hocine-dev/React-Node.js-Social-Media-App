import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import UserProfile from '../../components/Profile/UserProfile';


function Profile() {
  return (
    <>
    <Topbar/>
    <div className='homeContainer'>
      
      <UserProfile/>
      <Rightbar/>
    </div>
    </>
  )
}

export default Profile