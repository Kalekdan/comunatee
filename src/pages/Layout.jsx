import { Outlet, Link } from "react-router-dom";
import users from "../data_models/users.json";
import comunatees from "../data_models/comunatees.json";
import UsernameLink from "../components/UsernameLink";
import ComunateeLink from "../components/ComunateeLink";

const Layout = () => {
  const getUserListLinks = () => {
    return users.map((x) => {
      return (
        <li>
          <UsernameLink username={x.username}/>
        </li>
      );
    });
  };
  const getComunateeListLinks = () => {
    return comunatees.map((x) => {
      return (
        <li>
          <ComunateeLink comunatee={x}/>
        </li>
      );
    });
  };
  return (
    <>
    <h1>Comunatee</h1>
      <table>
        <tr>
          <td>
            <nav>
              <h2>Comunatees</h2>
              <ul>{getComunateeListLinks()}</ul>
            </nav>
          </td>
          <td>
            <nav>
              <h2>Users</h2>
              <ul>{getUserListLinks()}</ul>
            </nav>
          </td>
        </tr>
      </table>
      <Outlet />
    </>
  );
};

export default Layout;
