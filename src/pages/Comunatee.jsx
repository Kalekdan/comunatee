import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
import UsernameLink from "../components/UsernameLink";
import PostLink from "../components/PostLink";

const Comunatee = () => {
  const { comunatee } = useParams();

  const getPosts = () => {
    var tempPosts = posts.filter((x) => x.comunatee === comunatee);

    return tempPosts.map((x) => {
      return (
        <tr>
          <td>
            <UsernameLink username={x.op}/>
          </td>
          <td>
            <PostLink comunatee={comunatee} op={x.op} postId={x.id} text={x.content}></PostLink>
           
            </td>
        </tr>
      );
    });
  };
  return <table>{getPosts()}</table>;
};

export default Comunatee;
