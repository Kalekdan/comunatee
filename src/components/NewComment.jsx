import React, { useState } from 'react';
import { addThreadToComment } from '../api/comments'; 
import { createThreads } from '../api/threads';
import { useParams } from "react-router-dom";

const NewComment = () => {
    const { postId } = useParams();
    
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim()) {
            try {
                // Create a new post thread
                const newThread = await createThreads({ parentComment: null, content: comment , op: 'kalekdan'});
                // Add new comment to the posts thread
                await addThreadToComment(postId, newThread.commentId);
                setComment(''); // Clear the input after submission
                alert('Comment submitted successfully!');
            } catch (error) {
                console.error('Error submitting comment:', error);
                alert('Failed to submit comment.');
            }
        } else {
            alert('Comment cannot be empty.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..."
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit">Submit Comment</button>
            </form>
        </div>
    );
};

export default NewComment;