import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
import Thread from "../components/Thread";
const Post = () => {
  const { comunatee, username, postId } = useParams();

  return <div>
    {posts.filter(x=>x.id === postId)[0].content}
    <Thread postId={postId}></Thread>
    </div>;
};

export default Post;
