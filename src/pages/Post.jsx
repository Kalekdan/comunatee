import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import CommentsSection from "../components/CommentsSection";
const Post = () => {
  // const { comunatee, username, postId } = useParams();
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postsList = await getPosts(); // Call the function to fetch posts
        setPost(postsList.filter((x) => x.id === postId)[0]); // Update state with fetched comunatees
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div>
      {post.content}
      <CommentsSection postId={post.id}></CommentsSection>
    </div>
  );
};

export default Post;
