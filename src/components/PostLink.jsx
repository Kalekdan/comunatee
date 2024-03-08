import React from 'react'
import { Link } from "react-router-dom";

const PostLink = ({comunatee, op, postId, text}) => {
  return (
    <Link to={"/c/" + comunatee + "/" + op+ "/" + postId}>{text}</Link>
  )
}

export default PostLink