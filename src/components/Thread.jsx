import React from 'react'
import threads from "../data_models/threads.json";

const Thread = ({postId}) => {
  return (
    <div>{threads.filter(x=>x.postId === postId)[0].comments.map(x=> {return <p>{x}</p>})}</div>
  )
}

export default Thread