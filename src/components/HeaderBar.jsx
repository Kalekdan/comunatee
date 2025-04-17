import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComunateeLink from "./ComunateeLink";
import "./styles/header.scss";
import { getComunatees } from "../api/comunatees"; // Assuming you have an API function to fetch comunatees

const HeaderBar = () => {
  const [comunatees, setComunatees] = useState([]);

  useEffect(() => {
    const fetchComunatees = async () => {
      try {
        const communateeList = await getComunatees(); // Call the function to fetch comunatees
        setComunatees(communateeList);
      } catch (error) {
        console.error("Failed to fetch comunatees:", error);
      }
    };

    fetchComunatees();
  }, []); // Empty dependency array ensures this runs once on mount

  const getComunateesDropdown = () => {
    return comunatees.map((x) => {
      return (
        <div>
          <li>
            <ComunateeLink comunatee={x.name} />
          </li>
        </div>
      );
    });
  };

  return (
    <div className="header-bar">
      <div>
        <Link className="header-title" to={"/"}>
          Comunatee
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Popular</li>
            <li className="dropdown">
              Comunatees
              <div className="dropdown-content">{getComunateesDropdown()}</div>
            </li>
            <li>Create Post</li>
            <li className="last-header-entry">Account</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBar;
