import React from "react";
import "./topbar.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import {
  Search,
  Notifications,
  Chat,
  AccountCircle,
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <AppBar position="static" className="topbar">
      <Toolbar className="toolbar">
        <div className="left">Hocinebook</div>
        <div className="center">
          <div className="searchbar">
            <Search className="searchIcon" />
            <InputBase placeholder="Search…" className="inputBase" />
          </div>
        </div>
        <div className="right">
          <div className="links">
            <a href="#home">Home</a>
            <a href="#profile">Timeline</a>
          </div>

          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <AccountCircle />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <Chat />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Avatar src="./assets/person/1.jpeg" alt="Profile" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
