import React from "react";
import "./styles.css";

const NavbarProfile = () => {
  return (
    <div className="nav-profile-container navbar-collapse">
      <ul className="navbar-nav ">
        <li>
          <a
            href="https://github.com/LaraMatosAguirres/DSCatalog-projectReact"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-profile-item"
          >
            DSCatalog
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LaraMatosAguirres/dsviacep"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-profile-item"
          >
            DSViaCep
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LaraMatosAguirres/chess-system-java"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-profile-item"
          >
            ChessSystem
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarProfile;
