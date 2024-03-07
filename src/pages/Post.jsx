import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
import CommentsSection from "../components/CommentsSection";
const Post = () => {
  // const { comunatee, username, postId } = useParams();
  const { postId } = useParams();

  return <div>
    {posts.filter(x=>x.id === postId)[0].content}
    <CommentsSection postId={postId}></CommentsSection>
    </div>;
};

export default Post;
