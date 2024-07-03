import React from 'react';
import './post.css';
import { Avatar, IconButton, Button, TextField } from '@mui/material';
import { MoreVert, ThumbUp, ChatBubbleOutline } from '@mui/icons-material';

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Avatar src="./assets/person/1.jpeg" alt="Profile" className="postProfileImg" />
            <span className="postUsername">John Doe</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! This is my first post.</span>
          <img src="./assets/post/1.jpeg" alt="Post" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton>
              <ThumbUp className="likeIcon" />
            </IconButton>
            <span className="postLikeCounter">32 likes</span>
          </div>
          <div className="postBottomRight">
            <IconButton>
              <ChatBubbleOutline className="commentIcon" />
            </IconButton>
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
        <div className="postCommentForm">
          <TextField
            variant="outlined"
            placeholder="Add a comment..."
            fullWidth
            className="commentInput"
          />
          <Button variant="contained" color="primary" className="commentButton">
          comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
