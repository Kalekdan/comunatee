import React from 'react'
import threads from "../data_models/threads.json";
import Comment from './Comment';

const Thread = ({ commentId }) => {
  return (
    <>
      {threads.filter(thread => thread.commentId === commentId).map(x => {
        return <Comment content={x.content} op={x.op} commentId={x.commentId}/>
      }

      )}
    </>
  )
}

export default Thread