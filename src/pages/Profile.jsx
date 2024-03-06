import { useParams } from "react-router-dom";
import users from "../data_models/users.json";
import posts from "../data_models/posts.json";
const Profile = () => {
  const { username } = useParams();
  const getPosts = () => {
    var tempPosts = posts.filter((x) => x.op === username);

    return tempPosts.map((x) => {
      return (
        <>
          {x.content}
          <br />
        </>
      );
    });
  };
  return (
    <>
      <h1>{username}</h1>
      <>{getPosts()}</>
    </>
  );
};

export default Profile;
