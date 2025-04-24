import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsernameLink from "../components/UsernameLink";
import PostLink from "../components/PostLink";
import { getComunatees } from "../api/comunatees";
import { getPosts } from "../api/posts";

const Comunatee = () => {
  const { comunatee } = useParams(); // comunatee name from URL
  const [comunateeDetails, setComunatee] = useState([]);
  const [posts, setPosts] = useState([]); 
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
  }, [comunatee]); 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsList = await getPosts(); // Call the function to fetch posts
        setPosts(postsList.filter((x) => x.comunatee === comunatee)); // Update state with fetched comunatees
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, [comunatee]); 
  const getPostsList = () => {
    return posts.map((x) => {
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
      <table>{getPostsList()}</table>
    </>
  );
};

export default Comunatee;
