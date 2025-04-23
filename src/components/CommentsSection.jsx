import React from "react";
import Thread from "./Thread";
import { useEffect, useState } from "react";
import { getComments } from "../api/comments";
import ReplyButton from "./ReplyButton";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsList = await getComments();
        setComments(commentsList);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handleReplyAdded = (newThread) => {
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
  };

  const getTopLevelComments = () => {
    const temp = comments.filter((x) => x.postId === postId);
    if (temp.length === 0) return <>No comments found</>;
    const threadIdList = temp[0];
    const threadList = threadIdList.threads.map((topLevelCommentId) => {
      return <Thread commentId={topLevelCommentId} />;
    });
    return threadList;
  };

  return (
    <>
      <h4>Comments</h4>
      <ReplyButton
        parentComment={null}
        postId={postId}
        onReplyAdded={handleReplyAdded}
      />
      <div>{getTopLevelComments()}</div>
    </>
  );
};

export default CommentsSection;
