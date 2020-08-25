import React from "react";
import "../navbar.css";
import logo from "../images/logo.png";

export default () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src={logo} alt="Small." />
      </a>
      <div
        id="nav-toggle"
        className="navbar-burger burger"
        onClick={() => onClick()}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="nav-menu" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a
                exact={true}
                className="navbar-item"
                activeClassName="is-active"
              >
                Home
              </a>
            </p>
            <p className="control">
              <a className="navbar-item" href="/">
                Blog
              </a>
            </p>
            <p className="control">
              <a
                to="/about"
                className="navbar-item"
                activeClassName="is-active"
              >
                About Us
              </a>
            </p>
            <p className="control">
              <a className="button is-link is-outlined" href="/">
                <span>Sign In</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const onClick = () => {
  let toggle = document.querySelector("#nav-toggle");
  let menu = document.querySelector("#nav-menu");
  toggle.classList.toggle("is-active");
  menu.classList.toggle("is-active");
};
