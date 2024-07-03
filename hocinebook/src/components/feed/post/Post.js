import React, { useState } from "react";
import "./post.css";
import { Avatar, IconButton, Button, TextField } from "@mui/material";
import { MoreVert, ThumbUp, ChatBubbleOutline } from "@mui/icons-material";
import { Users } from "../../../dummyData";

const Post = ({ post }) => {
  const [Likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLikes(isLiked ? Likes - 1 : Likes + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Avatar
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="Profile"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="Post" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton>
              <ThumbUp className="likeIcon" onClick={likeHandler} />
            </IconButton>
            <span className="postLikeCounter">{Likes} likes</span>
          </div>
          <div className="postBottomRight">
            <IconButton>
              <ChatBubbleOutline className="commentIcon" />
            </IconButton>
            <span className="postCommentText">{post.comment} comments</span>
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
