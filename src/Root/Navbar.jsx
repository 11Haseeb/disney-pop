import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar(props) {
  const { toggleTheme } = props;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DisneyPop
          </a>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  aria-current="page"
                  className={`nav-link ${(e) => e.isActive("active")}`}
                  to={"/home"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(e) => e.isActive("active")}`}
                  to={"/shows"}
                >
                  Shows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(e) => e.isActive("active")}`}
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(e) => e.isActive("active")}`}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <label className="switch">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider" />
              </label>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
