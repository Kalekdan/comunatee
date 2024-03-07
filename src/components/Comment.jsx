import React from 'react'
import threads from "../data_models/threads.json";

const Comment = ({ content, op, commentId , level = 0}) => {

    const generateIndents = (count) => {
        var toReturn = ''
        for (let index = 0; index < count; index++) {
            toReturn = toReturn + '________'            
        }
        return toReturn;
    }
    return (
        <>
        {/* Add indents */}
        <br></br>
        <>{generateIndents(level)}</>
            <table style={{display:"inline"}}>
                <tr>
                    <td>
                        {op}
                    </td>
                    <td>
                        {content}
                    </td>
                </tr>

            </table>
            {threads.filter(thread => thread.parentComment === commentId).map(x => {
                return <Comment content={x.content} op={x.op} commentId={x.commentId} level={level+1}/>
            })}
        </>
    )
}

export default Comment