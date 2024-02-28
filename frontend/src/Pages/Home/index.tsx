import { ReactComponent as Line } from "../../assets/images/Line.svg";
import { ReactComponent as Instagram } from "../../assets/images/Instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/images/Linkedin.svg";
import "./styles.css";

const Home = () => {
  return (
    <nav className="home-container">
      <div className="content-container">
        <div>
          <h1>Meus projetos</h1>
        </div>
        <div>
          <h1>Sobre mim</h1>
        </div>
        <div>
          <h1>Me contate</h1>
        </div>
      </div>
      <div className="specialization-content">
        <div>
          <h5>Meu container</h5>
        </div>
      </div>
      <div className="nav-social-container">
        <a
          href="https://www.instagram.com/lara.laramatos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/lara-matos-aguirres-3a632b244/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <div className="nav-left-item-line">
          <Line />
        </div>
        <div className="nav-left-item nav-year-item">
          <h1>/2024</h1>
        </div>
      </div>
    </nav>
  );
};

export default Home;
