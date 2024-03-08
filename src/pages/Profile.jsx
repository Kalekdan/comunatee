import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
import users from "../data_models/users.json"
import React from "react";
import PostLink from "../components/PostLink";

const Profile = () => {
  const { username } = useParams();
  const user = users.filter(x => x.username === username)[0];
  const getPosts = () => {
    var tempPosts = posts.filter((x) => x.op === username);

    return tempPosts.map((x) => {
      return (
        <>
          <PostLink comunatee={x.comunatee} op={x.op} postId={x.id} text={x.content} />
          <br />
        </>
      );
    });
  };
  return (
    <>
      <img alt="profile" style={{ width: "50px", height: "50px" }}
        src={user.profile_pic}></img>
      <h1>{user.username}</h1>
      <>{getPosts()}</>
    </>
  );
};

export default Profile;
