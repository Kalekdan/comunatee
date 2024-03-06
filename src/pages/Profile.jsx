import { useParams } from "react-router-dom";
import posts from "../data_models/posts.json";
const Profile = () => {
  const { username } = useParams();
  const getPosts = () => {
    var tempPosts = posts.filter((x) => x.op === username);

    return tempPosts.map((x) => {
      return (
        <a href={"/c/"+x.comunatee+"/"+x.op+"/"+x.id}>
          {x.content}
          <br />
        </a>
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
