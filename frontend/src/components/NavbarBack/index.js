import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Line } from "../../assets/images/Line.svg";
import "./styles.css";

const NavbarBack = () => {
  return (
    <div className="nav-content-left-container nav-left-contact-container">
      <div className="home-link">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-left-item-line line-contact-container">
        <Line />
      </div>
      <div className="nav-left-year-item nav-back-year-item">
        <h6>©/2024</h6>
      </div>
    </div>
  );
};

export default NavbarBack;
