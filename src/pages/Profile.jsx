import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import { useParams } from "react-router-dom";
import { getPosts } from "../api/posts";
import React from "react";
import PostLink from "../components/PostLink";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userList = await getUsers(); // Call the function to fetch user
        setUser(userList.filter((x) => x.username === username)[0]); // Update state with fetched user
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, ); 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsList = await getPosts(); // Call the function to fetch posts
        setPosts(postsList.filter((x) => x.op === username)); // Update state with fetched comunatees
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  },); 

  const getPostsList = () => {
    return posts.map((x) => {
      return (
        <>
          <PostLink
            comunatee={x.comunatee}
            op={x.op}
            postId={x.id}
            text={x.content}
          />
          <br />
        </>
      );
    });
  };
  return (
    <>
      <img
        alt="profile"
        style={{ width: "50px", height: "50px" }}
        src={user.profile_pic}
      ></img>
      <h1>{user.username}</h1>
      <>{getPostsList()}</>
    </>
  );
};

export default Profile;
