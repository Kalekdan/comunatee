import React from 'react'
import Thread from './Thread';
import comments from "../data_models/comments.json";

const CommentsSection = ({ postId }) => {
    const getTopLevelComments = () => {
        // Get the list of threads related to this post, if there are none, return
        var temp = comments.filter(x => x.postId === postId);
        if (temp.length === 0 ) return <>No comments found</>;
        var threadIdList = temp[0];
        var threadList = threadIdList.threads.map(topLevelCommentId => { return <Thread commentId={topLevelCommentId} /> })
        return threadList;
    }

    return (
        <>
            <h4>Comments</h4>
            <div>{getTopLevelComments()}</div>
        </>
    )
}

export default CommentsSection