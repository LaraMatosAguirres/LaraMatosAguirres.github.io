import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const NavbarBottom = () => {
  return (
    <div className="content-container navbar-collapse">
      <ul className="items-container position-relative navbar-nav ">
        <li>
          <NavLink to="/profile" className="nav-bottom-text-link">
            Meus projetos
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-bottom-text-link">
            Sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-bottom-text-link">
            Me contate
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
