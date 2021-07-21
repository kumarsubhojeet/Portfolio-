import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand navheading" to="/">
          Subhojit
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">

            <li className="nav_item">
              <Link className="nav_link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav_item">
              <Link className="nav_link" to="/about_main">
                About
              </Link>
            </li>

            <li className="nav_item">
              <Link className="nav_link" to="/Contact">
                Contact
              </Link>
            </li>

            <li className="nav_item">
              <Link className="nav_link" to="/Projects">
                Projects
              </Link>

            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
