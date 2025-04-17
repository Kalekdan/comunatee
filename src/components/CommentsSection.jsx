import React from "react";
import Thread from "./Thread";
import { useEffect, useState } from "react";
import { getComments } from "../api/comments"; 

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsList = await getComments(); // Call the function to fetch comments
        setComments(commentsList); // Update state with fetched comments
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, []); // Empty dependency array ensures this runs once on mount

  const getTopLevelComments = () => {
    // Get the list of threads related to this post, if there are none, return
    var temp = comments.filter((x) => x.postId === postId);
    if (temp.length === 0) return <>No comments found</>;
    var threadIdList = temp[0];
    var threadList = threadIdList.threads.map((topLevelCommentId) => {
      return <Thread commentId={topLevelCommentId} />;
    });
    return threadList;
  };

  return (
    <>
      <h4>Comments</h4>
      <div>{getTopLevelComments()}</div>
    </>
  );
};

export default CommentsSection;
