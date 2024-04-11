import React from "react";
import { ReactComponent as Line } from "../../assets/images/Line.svg";
import { ReactComponent as Instagram } from "../../assets/images/Instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/images/Linkedin.svg";
import "./styles.css";

const NavbarTop = () => {
  return (
    <div className="nav-content-left-container">
      <div className="content-social-svg">
        <a
          href="https://www.instagram.com/lara.laramatos/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link instagram"
        >
          <Instagram />
        </a>
      </div>
      <div className="content-social-svg">
        <a
          href="https://www.linkedin.com/in/lara-matos-aguirres-3a632b244/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link linkedin"
        >
          <Linkedin />
        </a>
      </div>
      <div className="nav-left-item-line">
        <Line />
      </div>
      <div className="nav-left-year-item h6">
        <h6>©/2024</h6>
      </div>
    </div>
  );
};

export default NavbarTop;
