import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

function Topbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        {/* Left Side - Indices */}
        <div className="d-flex align-items-center mx-5">
          {/* NIFTY */}
          <div className="d-flex flex-column me-4 text-dark">
            <span className="fw-bold">NIFTY</span>
            <span className="index-points text-success">100.2</span>
            <span className="percent text-success">+0.5%</span>
          </div>
          {/* SENSEX */}
          <div className="d-flex flex-column text-dark">
            <span className="fw-bold">SENSEX</span>
            <span className="index-points text-danger">99.9</span>
            <span className="percent text-danger">-0.2%</span>
          </div>
        </div>
        {/* search box */}

        <SearchBar />

        {/* Right Side - Menu */}
        <Menu />
      </div>
    </nav>
  );
}

export default Topbar;
