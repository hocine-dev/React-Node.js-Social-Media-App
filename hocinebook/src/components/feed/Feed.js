import React, { useEffect } from "react";
import Share from "./share/Share";
import Post from "./post/Post";
import { useState } from "react";
import axios from "axios";

const Feed = () => {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6682e5499dcc84fc978d2ee5");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <Share />
      {Posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
};

export default Feed;
