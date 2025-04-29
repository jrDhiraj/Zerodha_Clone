import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        {/* Navbar Brand (Can be a logo or text) */}
        <Link className="navbar-brand fw-bold" to="/">
          Dashbord
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          
            <li className="nav-item">
              <Link className="nav-link" to="/order">Order</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/holding">Holding</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/position">Positions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/funds">Funds</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apps">Apps</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="http://localhost:5173/">Go Back</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
