import React from 'react'
import Thread from './Thread';
import comments from "../data_models/comments.json";

const CommentsSection = ({ postId }) => {
    return (
        <div>{comments.filter(x => x.postId === postId)[0].threads.map(topLevelCommentId => { return <Thread commentId={topLevelCommentId}/> })}</div>
    )
}

export default CommentsSection