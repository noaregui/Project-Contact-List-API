import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3" style={{ color: "red" }}>
      <span className="navbar-brand">
        <strong>Your contact list</strong>
      </span>
      <div className="ml-auto">
        <Link to="/viewFormulario">
          <button className="CreateNewContact">
            <span className="span-mother">
              <span>N</span>
              <span>e</span>
              <span>w</span>
            </span>
            <span className="span-mother2">
              <span>N</span>
              <span>e</span>
              <span>w</span>
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};
