import React from "react";
import { Link } from "react-router-dom";
import { Logo, Theme } from "../../media/icons";
import "./style.css";
export default function Navbar() {
  return (
    <div className="navbar container">
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="logo-title">Product</h1>
      </div>
      <div className="menu-container">
        <nav className="nav">
          <ul className="menu-links">
            <li className="menu--link">
              <a href="" className="font-size_1626">
                Product
              </a>
            </li>
            <li className="menu--link">
              <a href="" className="font-size_1626">
                Customers
              </a>
            </li>
            <li className="menu--link">
              <a href="" className="font-size_1626">
                Pricing
              </a>
            </li>
            <li className="menu--link">
              <a href="" className="font-size_1626">
                Resources
              </a>
            </li>
          </ul>
        </nav>
        <div className="navbar__btn-group">
          <button className="sign-in__btn font-size_1626">Sign In</button>
          <button className="sign-up__btn font-size_1626">Sign Up</button>
        </div>
        <Link to="/">
          <Theme />
        </Link>
      </div>
    </div>
  );
}
