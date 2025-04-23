import React from "react";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import { getThreads } from "../api/threads";

const Thread = ({ commentId }) => {
  const [threads, setThreads] = useState([commentId]);
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const threadsList = await getThreads(); // Call the function to fetch threads
        setThreads(threadsList.filter((x) => x.commentId === commentId)); // Update state with fetched threads
      } catch (error) {
        console.error("Failed to fetch threads:", error);
      }
    };
    fetchThreads();
  }, [commentId]);
  return (
    <>
      {threads.map((x) => {
        return (
          <Comment content={x.content} op={x.op} commentId={x.commentId} />
        );
      })}
    </>
  );
};

export default Thread;
