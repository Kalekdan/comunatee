import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";

const Comunatee = () => {
  const { comunatee } = useParams();

  const getPosts = () => {
    var tempPosts = posts.filter((x) => x.comunatee === comunatee);

    return tempPosts.map((x) => {
      return (
        <tr>
            <td>
                {x.op}
            </td>
          <td>{x.content}</td>
        </tr>
      );
    });
  };
  return <table>{getPosts()}</table>;
};

export default Comunatee;
