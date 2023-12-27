import React from "react";
import { Link } from "react-router-dom";
import { Community, Legal, Product } from "../../data";
import Logo from "/Images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content container">
        <div className="footer-box">
          <p>Product</p>
          <ul>
            {Product.map((products, index) => {
              return (
                <li key={index}>
                  <Link>{products.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-box">
          <p>Community</p>
          <ul>
            {Community.map((Communitys, index) => {
              return (
                <li key={index}>
                  <Link>{Communitys.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-box">
          <p>Legal</p>
          <ul>
            {Legal.map((Legals, index) => {
              return (
                <li key={index}>
                  <Link>{Legals.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-details">
        <img src={Logo} alt="Logo for footer" />
        <p> {`© ${new Date().getFullYear()}, All rights reserved `}</p>
      </div>
    </footer>
  );
};

export default Footer;
