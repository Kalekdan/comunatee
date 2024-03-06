import React from "react";
import Posts from "../data_models/posts.json";

const Post = () => {
  return (
    <div>
      {Posts.map((x) => {
        return (
          <>
            <p>{x.id}</p> <p>{x.content}</p>
          </>
        );
      })}
    </div>
  );
};

export default Post;
