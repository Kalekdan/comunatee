import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
import communatees from "../data_models/comunatees.json";
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
            <UsernameLink username={x.op} />
          </td>
          <td>
            <PostLink
              comunatee={comunatee}
              op={x.op}
              postId={x.id}
              text={x.content}
            ></PostLink>
          </td>
        </tr>
      );
    });
  };

  const getComunateeSummary = () => {
    var tempComunatee = communatees.filter((x) => x.name === comunatee)[0];
    return (
      <>
        <p>
          {tempComunatee.description} - Owned by{" "}
          <UsernameLink username={tempComunatee.owner}></UsernameLink>
        </p>
      </>
    );
  };
  return (
    <>
      <h1>{comunatee}</h1>
      <>{getComunateeSummary()}</>
      <table>{getPosts()}</table>
    </>
  );
};

export default Comunatee;
