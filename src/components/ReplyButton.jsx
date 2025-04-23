import React, { useState, useRef, useEffect } from "react";
import { createThreads } from "../api/threads";
import { addThreadToComment } from "../api/comments";
const ReplyButton = ({ parentComment = null, postId = null, onReplyAdded }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isReplying && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isReplying]);

  const handleAddReply = async () => {
    if (replyContent && replyContent.trim()) {
      try {
        const newThread = await createThreads({
          parentComment: parentComment,
          content: replyContent,
          op: "kalekdan", // Replace with dynamic username if available
          postId: postId,
        });

        await addThreadToComment(postId, newThread.commentId);
        if (onReplyAdded) {
          onReplyAdded(newThread);
        }

        setReplyContent("");
        setIsReplying(false);
      } catch (error) {
        console.error("Error adding reply:", error);
      }
    } else {
      alert("Reply cannot be empty.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddReply();
    }
  };

  return (
    <div>
      {isReplying ? (
        <div>
          <textarea
            ref={textAreaRef}
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write your reply..."
          />
          <button onClick={handleAddReply}>Submit Reply</button>
          <button onClick={() => setIsReplying(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsReplying(true)}>Reply</button>
      )}
    </div>
  );
};

export default ReplyButton;