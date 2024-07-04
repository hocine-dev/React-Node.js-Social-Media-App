import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import UserProfile from "../../components/Profile/UserProfile";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />

      <div className="homeContainer">
        <Sidebar />
        <div className="profile">
        <UserProfile/>
        <Feed />
        </div>
        <Rightbar />
      </div>
    </>
  );
}

export default Profile;
