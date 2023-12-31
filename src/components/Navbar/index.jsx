import React from "react";
import logo from "../../img/logo (1).svg";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div class="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            <li>
              <a href="#home" className="nav-link">
                home
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link">
                about
              </a>
            </li>

            <li>
              <a href="#services" className="nav-link">
                services
              </a>
            </li>

            <li>
              <a href="#tours" className="nav-link">
                tours
              </a>
            </li>
          </ul>

          <ul className="nav-icons">
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="nav-icon"
                rel="noreferrer"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="nav-icon"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
                rel="noreferrer"
              >
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
