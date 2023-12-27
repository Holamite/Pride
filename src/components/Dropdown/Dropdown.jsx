import React from "react";
import { dropdownMenu } from "../../../data";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <ul className="dropdown-submenu">
        {dropdownMenu.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.url} className="dropdown-submenu-link">
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
