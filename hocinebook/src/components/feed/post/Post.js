import React, { useState , useEffect  } from "react";
import "./post.css";
import { Avatar, IconButton, Button, TextField } from "@mui/material";
import { MoreVert, ThumbUp, ChatBubbleOutline } from "@mui/icons-material";
import axios from "axios";
import {format} from "timeago.js"


const Post = ({ post }) => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [Likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [User, setUser] = useState({})

  const likeHandler = () => {
    setLikes(isLiked ? Likes - 1 : Likes + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
      
        const res = await axios.get('http://localhost:8800/api/users/6682e5499dcc84fc978d2ee5');        setUser(res.data);
        setUser(res.data);

      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  },[post.userId,pf]);


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Avatar
              src={pf+User.profilePicture || pf + "person/noavatar.jpeg" }
              alt="Profile"
              className="postProfileImg"
            />
            <span className="postUsername">
              {User.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={pf+post.img} alt="Post" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton onClick={likeHandler} >
              <ThumbUp className="likeIcon" />
            </IconButton>
            <span className="postLikeCounter">{Likes} likes</span>
          </div>
          <div className="postBottomRight">
            <IconButton>
              <ChatBubbleOutline className="commentIcon" />
            </IconButton>
            <span className="postCommentText"> comments</span>
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
