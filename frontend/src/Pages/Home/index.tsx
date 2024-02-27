import { ReactComponent as Line } from "../../assets/images/Line.svg";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container mw-100">
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
        <div className="nav-left-item">
          <h6>Instagram</h6>
        </div>
        <div className="nav-left-item">
          <h6>Linkedin</h6>
        </div>
        <div className="nav-left-item">
          <Line />
        </div>
        <div className="nav-left-item nav-year-item">
          <h1>/2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
