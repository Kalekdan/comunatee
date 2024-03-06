import { Outlet, Link } from "react-router-dom";
import users from "../data_models/users.json";
import comunatees from "../data_models/comunatees.json";

const Layout = () => {
  const getUserListLinks = () => {
    return users.map((x) => {
      return (
        <li>
          <Link to={"/u/" + x.username}>{x.username}</Link>
        </li>
      );
    });
  };
  const getComunateeListLinks = () => {
    return comunatees.map((x) => {
      return (
        <li>
          <Link to={"/c/" + x}>{x}</Link>
        </li>
      );
    });
  };
  return (
    <table>
      <tr>
        <td>
          <nav>
            <h2>Comunatees</h2>
            <ul>{getComunateeListLinks()}</ul>
          </nav>{" "}
        </td>
        <td>
          <nav>
            <h2>Users</h2>
            <ul>{getUserListLinks()}</ul>
          </nav>
        </td>
      </tr>

      <Outlet />
    </table>
  );
};

export default Layout;
