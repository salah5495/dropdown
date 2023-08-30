import React from "react";
import "./Header.css";
import { Icon } from "@iconify/react";
const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item with-dropdown">
            <a className="nav-link" href="/">
              Training Courses{" "}
              <span>
                <Icon icon="formkit:down" color="#fff" width="20" />
              </span>
            </a>
            <div className="dropdown">
              <a href="/">Course 1</a>
              <a href="/">Course 2</a>
              <a href="/">Course 3</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
