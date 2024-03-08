import React from 'react'
import { Link } from "react-router-dom";

const UsernameLink = ({username}) => {
  return (
    <Link to={'/u/'+username}>{username}</Link>
  )
}

export default UsernameLink