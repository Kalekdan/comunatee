import React from 'react'
import threads from "../data_models/threads.json";
import Comment from './Comment';

const Thread = ({ threadId }) => {
  return (
    <>
      {threads.filter(thread => thread.threadId === threadId).map(x => {
        return <Comment content={x.content} op={x.op} threadId={x.threadId}/>
      }

      )}
    </>
  )
}

export default Thread