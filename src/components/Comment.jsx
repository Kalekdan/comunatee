import React from 'react'
import threads from "../data_models/threads.json";

const Comment = ({ content, op, threadId , level = 0}) => {

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
            {threads.filter(thread => thread.parentComment === threadId).map(x => {
                return <Comment content={x.content} op={x.op} threadId={x.threadId} level={level+1}/>
            })}
        </>
    )
}

export default Comment