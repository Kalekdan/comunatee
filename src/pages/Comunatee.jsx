import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
import UsernameLink from "../components/UsernameLink";
import PostLink from "../components/PostLink";
import { getComunatees } from "../api/comunatees"; // Assuming you have an API function to fetch comunatees

const Comunatee = () => {
  const { comunatee } = useParams(); // comunatee name from URL
  const [comunateeDetails, setComunatee] = useState([]);

  useEffect(() => {
    const fetchComunatee = async () => {
      try {
        const comunateeList = await getComunatees(); // Call the function to fetch comunatees
        setComunatee(comunateeList.filter((x) => x.name === comunatee)[0]); // Update state with fetched comunatees
      } catch (error) {
        console.error("Failed to fetch comunatees:", error);
      }
    };
    fetchComunatee();
  },); 

  const getPosts = () => {
    var tempPosts = posts.filter((x) => x.comunatee === comunateeDetails.name);

    return tempPosts.map((x) => {
      return (
        <tr>
          <td>
            <UsernameLink username={x.op} />
          </td>
          <td>
            <PostLink
              comunatee={comunateeDetails.name}
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
    return (
      <>
        <p>
          {comunateeDetails.description} - Owned by{" "}
          <UsernameLink username={comunateeDetails.owner}></UsernameLink>
        </p>
      </>
    );
  };
  return (
    <>
      <h1>{comunateeDetails.name}</h1>
      <>{getComunateeSummary()}</>
      <table>{getPosts()}</table>
    </>
  );
};

export default Comunatee;
