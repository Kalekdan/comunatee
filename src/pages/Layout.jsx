import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UsernameLink from "../components/UsernameLink";
import ComunateeLink from "../components/ComunateeLink";
import HeaderBar from "../components/HeaderBar";
import { getUsers } from "../api/users";
import { getComunatees } from "../api/comunatees";
const Layout = () => {
  const [users, setUsers] = useState([]);
  const [comunatees, setComunatees] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getUsers(); // Call the function to fetch users
        setUsers(userList); // Update state with fetched users
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    const fetchComunatee = async () => {
      try {
        const comunateeList = await getComunatees(); // Call the function to fetch comunatees
        setComunatees(comunateeList); // Update state with fetched comunatees
      } catch (error) {
        console.error("Failed to fetch comunatees:", error);
      }
    };
    fetchComunatee();
  }, []); 

  const getUserListLinks = () => {
    return users.map((x) => (
      <li key={x.username}>
        <UsernameLink username={x.username} />
      </li>
    ));
  };

  const getComunateeListLinks = () => {
    return comunatees.map((x) => (
      <li key={x.name}>
        <ComunateeLink comunatee={x.name} />
      </li>
    ));
  };

  return (
    <>
      <HeaderBar />
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
