import React from "react";
import { ReactComponent as FotoPerfil } from "../../assets/images/FotoPerfil.svg";
import "./styles.css";

const Specialization = () => {
  return (
    <div className="container-fluid specialization-container">
      <div className="name-user-specialization-container primary">
        <h5>Olá!</h5>
        <div className="minha-foto">
          <FotoPerfil />
        </div>
      </div>

      <div className="row">
        <div className="specialization-content-container col secondary">
          <p>
            <h6>Sou Lara Matos Aguirres</h6> desenvolvedora web Jr. Atualmente
            atuo num projeto familiar como desenvolvedora, contribuindo para o
            desdobramento da aplicação e melhorando continuamente os sistemas.
            Estou cursando graduação de Desenvolvimento de Software, juntamente
            com cursos complementares como Bootcamps da DevSuperior de React e
            Java e outros cursos. Tenho conhecimentos em tecnologias como Java,
            React, MySQL além de ferramentas como Git, GitHub e GitLab.
          </p>
          <p>
            Ficou curioso? Continue rolando para baixo e descubra mais sobre
            mim!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
