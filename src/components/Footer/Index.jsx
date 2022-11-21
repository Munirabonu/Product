import React from "react";
import { Link } from "react-router-dom";

import { Facebook, Instagram, Logo, Twitter } from "../../media/icons";
import "./style.css";
export default function Footer() {
  return (
    <div className="footer container">
      <div className="layout">
        <div className="logo_wrap">
          <div className="logo-container">
            <Link to="/">
              <Logo />
            </Link>
            <h1 className="logo-title">Product</h1>
          </div>
          <div className="link_icon">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <ul className="links">
          <li className="link_item">
            <Link to="/" className="font-size_2233">
              Resource
            </Link>
          </li>
          <li className="link_item">
            <Link to="/" className="font-size_1626">
              About Us
            </Link>
          </li>
          <li className="link_item">
            <Link to="/" className="font-size_1626">
              Blog
            </Link>
          </li>
          <li className="link_item">
            <Link to="/" className="font-size_1626">
              Contact
            </Link>
          </li>
          <li className="link_item">
            <Link to="/" className="font-size_1626">
              FAQ
            </Link>
          </li>
        </ul>
        <ul className="finance_links">
          <li className="finance_item">
            <Link to="#" className="font-size_2233">
              Legal Stuff
            </Link>
          </li>
          <li className="finance_item">
            <Link to="#" className="font-size_1626">
              Disclaimer
            </Link>
          </li>

          <li className="finance_item">
            <Link to="#" className="font-size_1626">
              Financing
            </Link>
          </li>

          <li className="finance_item">
            <Link to="#" className="font-size_1626">
              Privacy Policy
            </Link>
          </li>

          <li className="finance_item">
            <Link to="#" className="font-size_1626">
              Terms of Service
            </Link>
          </li>
        </ul>
        <form>
          <p className="form_text">
            knowing you're always on the best energy deal.
          </p>
          <input type="text" />
          <button className="btn">Sign up Now</button>
        </form>
      </div>
      <h1 className="footer_text">
        Made With Love By Figmaland All Right Reserved
      </h1>
    </div>
  );
}
