import React from "react";
import Thread from "./Thread";
import { useEffect, useState } from "react";
import { getComments } from "../api/comments";
import { addThreadToComment } from "../api/comments";
import { createThreads } from "../api/threads"; // Import createThreads API

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

  const handleAddReply = async () => {
    const replyContent = prompt("Write your reply:");
    if (replyContent && replyContent.trim()) {
      try {
        // Create a new thread for the current post
        const newThread = await createThreads({
          parentComment: null, // Top-level comment, no parent
          content: replyContent,
          op: "kalekdan", // Replace with dynamic username if available
          postId: postId, // Associate the reply with the current post
        });
        await addThreadToComment(postId, newThread.commentId);
        // Update the comments state to include the new thread ID
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.postId === postId
              ? {
                  ...comment,
                  threads: [...comment.threads, newThread.commentId],
                }
              : comment
          )
        );
        alert("Reply added successfully!");
      } catch (error) {
        console.error("Error adding reply:", error);
        alert("Failed to add reply.");
      }
    } else {
      alert("Reply cannot be empty.");
    }
  };

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
      <button onClick={handleAddReply}>Reply</button>
      <div>{getTopLevelComments()}</div>
    </>
  );
};

export default CommentsSection;
