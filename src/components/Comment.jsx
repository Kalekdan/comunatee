import React from "react";
import { useEffect, useState } from "react";
import UsernameLink from "./UsernameLink";
import { getThreads } from "../api/threads";
import { createThreads } from '../api/threads';

const Comment = ({ content, op, commentId, level = 0 }) => {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const threadsList = await getThreads(); // Call the function to fetch threads
        setThreads(threadsList.filter((x)=> x.parentComment === commentId)); // Update state with fetched threads
      } catch (error) {
        console.error("Failed to fetch threads:", error);
      }
    };
    fetchThreads();
  }, [commentId]);

  const handleAddReply = async () => {
    const replyContent = prompt("Write your reply:");
    if (replyContent && replyContent.trim()) {
      try {
        // Create a new thread with the current comment as the parent
        const newThread = await createThreads({
          parentComment: commentId,
          content: replyContent,
          op: "kalekdan", 
        });

        // Update the threads state to include the new reply
        setThreads((prevThreads) => [...prevThreads, newThread]);

        alert("Reply added successfully!");
      } catch (error) {
        console.error("Error adding reply:", error);
        alert("Failed to add reply.");
      }
    } else {
      alert("Reply cannot be empty.");
    }
  };

  const generateIndents = (count) => {
    var toReturn = "";
    for (let index = 0; index < count; index++) {
      toReturn = toReturn + "________";
    }
    return toReturn;
  };
  return (
    <>
      {/* Add indents */}
      <br></br>
      <>{generateIndents(level)}</>
      <table style={{ display: "inline" }}>
        <tr>
          <td>
            <UsernameLink username={op}></UsernameLink>
          </td>
          <td>{content}</td>
          <td>
            <button onClick={handleAddReply}>Reply</button>
          </td>
        </tr>
      </table>
      {threads
        .map((x) => {
          return (
            <Comment
              content={x.content}
              op={x.op}
              commentId={x.commentId}
              level={level + 1}
            />
          );
        })}
    </>
  );
};

export default Comment;
