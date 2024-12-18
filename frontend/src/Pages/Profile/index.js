import React from "react";
import NavbarProfile from "../../components/NavbarProfile";
import { ReactComponent as ProjetoIlustracao } from "../../assets/images/ProjetoIlustracao.svg";
import "./styles.css";

const Profile = () => {

  return (
    <div className="profile-container">
      <div className="nav-profile-content-container">
        <div className="nav-profile-items-container container-fluid">
          <div className="profile-content-item row">
            <div className="profile-text-content-container col">
              <h6>MEUS PROJETOS</h6>
              <p>
                Aqui você encontra os meus melhores projetos, por favor, fique a
                vontade para olhar {":)"}
              </p>
            </div>
          </div>
          <div className="profile-content-item">
            <NavbarProfile />
          </div>
        </div>
        {/* <div className="top-nav-bar">
          <NavbarBack />
        </div>*/}
      </div>
      <div className="ilustracao-projeto">
        <ProjetoIlustracao />
      </div>
    </div>
  );
};

export default Profile;
