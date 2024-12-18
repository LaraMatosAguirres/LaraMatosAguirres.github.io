import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Profile from "../../Pages/Profile";
import About from "../../Pages/About";
import Curriculum from "../../Pages/Curriculum";
import "./styles.css"

function CarroselHome() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
          {/* Slide 1: Componente Profile */}
          <div className="carousel-item active">
            <div className="content-profile-item">
              <Profile />
            </div>
          </div>

          {/*<div className="carousel-item">
            <div className="content-profile-item">
              <Curriculum />
            </div>
          </div>*/}
          
          {/* Slide 2: Componente About */}
          <div className="carousel-item">
            <div className="content-profile-item">
              <About />
            </div>
          </div>
        </div>
  
        {/* Botões de Navegação */}
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }

  export default CarroselHome;
