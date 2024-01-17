import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Frontpage.css";

const Topbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container px-0">
        <span className="navbar-brand d-flex">
          <h1 className="h1" style={{ color: "grey", fontSize: "bold", cursor: "pointer" }}>
            Zen
          </h1>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/register"} style={{ marginRight: "2rem" }}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
