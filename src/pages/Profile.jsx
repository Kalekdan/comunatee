import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
import React from "react";
import PostLink from "../components/PostLink";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);

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

  const getPosts = () => {
    var tempPosts = posts.filter((x) => x.op === username);

    return tempPosts.map((x) => {
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
      <>{getPosts()}</>
    </>
  );
};

export default Profile;
