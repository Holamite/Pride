import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";

const Navlink = ({ url, text }) => {
  const [dropdown, setDropdown] = useState(false);
  if (text === "Launchpad") {
    return (
      <li
        className="navlink-item"
        onClick={() => setDropdown(!dropdown)}
        onMouseEnter={() => setDropdown(!dropdown)}
      >
        <div
          className={dropdown ? "overlay " : "hidden"}
          onClick={() => setDropdown(!dropdown)}
        ></div>
        <NavLink to={url}>{text}</NavLink>
        {dropdown && <Dropdown />}
      </li>
    );
  }

  return (
    <li className="navlink-item">
      <NavLink to={url}>{text}</NavLink>
    </li>
  );
};

export default Navlink;
