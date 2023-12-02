import React from "react";
import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="store" className="link-styled">
              Store
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              Mac
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              iPad
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              iPhone
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              Watch
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              AirPods
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              Tv & Home
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              Entertainment
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              Accessories
            </a>
          </li>
          <li>
            <a href="store" className="link-styled">
              Support
            </a>
          </li>
          <li>
            <img src={search} alt="" />
          </li>
          <li>
            <img src={store} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
