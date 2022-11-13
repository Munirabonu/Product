import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Logo, Theme } from "../../media/icons";
import "./style.css";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
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
              <Link to="/" className="font-size_1626">
                Product
              </Link>
            </li>
            <li className="menu--link">
              <Link to="/" className="font-size_1626">
                Customers
              </Link>
            </li>
            <li className="menu--link">
              <Link to="/" className="font-size_1626">
                Pricing
              </Link>
            </li>
            <li className="menu--link">
              <Link to="/" className="font-size_1626">
                Resources
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar__btn-group">
          <button className="sign-in__btn font-size_1626">Sign In</button>
          <button className="sign-up__btn font-size_1626">Sign Up</button>
        </div>
        <Link to="/">
          <button onClick={toggleTheme} className="theme--btn">
            <Theme />
          </button>
        </Link>
        <div className="mobile-menu">
          <input type="checkbox" id="active" />
          <label htmlFor="active" className="menu-btn">
            <span></span>
          </label>
          <label htmlFor="active" className="close"></label>
          <div className="wrapper">
            <ul>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Customers</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
