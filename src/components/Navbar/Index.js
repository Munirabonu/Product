import React, { useState } from "react";
import "./style.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Logo, Theme } from "../../media/icons";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    // starts Navbar
    // wtf
    <div className="navbar container">
      <div className="logo-container">
        <a href="">
          <Logo />
        </a>
        <h1 className="logo-text">Product</h1>
      </div>
      <div className="menu-container">
        <nav>
          <ul className="menu--links">
            <li className="menu--link">
              <a href="" className="font-size-1626">
                Product
              </a>
            </li>
            <li className="menu--link">
              <a href="" className="font-size-1626">
                Customers
              </a>
            </li>
            <li className="menu--link">
              <a href="" className="font-size-1626">
                Pricing
              </a>
            </li>
            <li className="menu--link">
              <a href="" className="font-size-1626">
                Resources
              </a>
            </li>
          </ul>
        </nav>
        <div className="btn-navbar__group">
          <button className="sign-in__btn">Sign In</button>
          <button className="sign-up__btn">Sign Up</button>
        </div>
        <a href="">
          <Theme />
        </a>
        <button className="res" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu
              style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
            />
          )}
        </button>
      </div>
    </div>
    // Navbar End
    //end
  );
}

// const closeMenu = () => {
//   setNavbarOpen(false);
// };
{
  /* <NavLink
  to={link.path}
  activeClassName="active-link"
  onClick={() => closeMenu()}
  exact
>
  {link.text}
</NavLink> */
}
