import { ReactComponent as Line } from "../../assets/images/Line.svg";
import { ReactComponent as Instagram } from "../../assets/images/Instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/images/Linkedin.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import Specialization from "../../components/Specialization";

const Home = () => {
  return (
    <nav className="home-container">
      <div className="nav-content-container">
        <div className="content-container position-relative ">
          <div>
            <Link
              to="/Profile"
              className="text-decoration-none"
              style={{ color: "unset" }}
            >
              <h1>Meus projetos</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/About"
              className="text-decoration-none"
              style={{ color: "unset" }}
            >
              <h1>Sobre mim</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/Contact"
              className="text-decoration-none"
              style={{ color: "unset" }}
            >
              <h1>Me contate</h1>
            </Link>
          </div>
        </div>
        <div>
          <Specialization />
        </div>
      </div>
      {/*
       <div className="content-social-container">
        <div className="content-social-svg">
          <a
            href="https://www.instagram.com/lara.laramatos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../assets/images/Instagram.svg" alt="Instagram">
              <Instagram />
            </img>
          </a>
        </div>
        <div className="content-social-svg">
          <a
            href="https://www.linkedin.com/in/lara-matos-aguirres-3a632b244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../assets/images/Linkedin.svg" alt="LinkedIn">
              <Linkedin />
            </img>
          </a>
        </div>
        <div className="nav-left-item-line">
          <img
            src="../../assets/images/Line.svg"
            alt="Linha reta na horizontal"
          >
            <Line />
          </img>
        </div>
        <div className="nav-left-item nav-year-item">
          <h1>©/2024</h1>
        </div>
      </div> */}
    </nav>
  );
};

export default Home;
