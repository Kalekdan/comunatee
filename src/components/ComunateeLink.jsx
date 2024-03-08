import React from 'react'
import { Link } from "react-router-dom";

const ComunateeLink = ({comunatee}) => {
  return (
    <Link to={"/c/"+comunatee}>{comunatee}</Link>
  )
}

export default ComunateeLink