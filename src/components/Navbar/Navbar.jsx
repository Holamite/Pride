import React from "react";
import { links } from "../../data";
import logo from "/Images/logo.svg";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <nav className="nav container">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul className="nav-link">
        {links.map((link) => {
          return <Navlink key={link.id} {...link} />;
        })}
      </ul>

      <button type="button" className="btn">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
