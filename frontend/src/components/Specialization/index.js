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
            <h6>Sou Lara Matos Aguirres</h6> desenvolvedora web Jr de 21 anos. Atualmente, 
            estou cursando Engenharia de Software na Jala University, uma faculdade de destaque internacional. 
            Já possuo sólida experiência em diversas tecnologias, incluindo Java, Python, Spring Boot, React e MySQL, 
            além de dominar ferramentas de controle de versão como Git, GitHub e GitLab.

            
          </p>
          <p>
            Meu objetivo é combinar meu conhecimento técnico com práticas inovadoras de desenvolvimento 
            para entregar soluções eficientes e escaláveis. Estou sempre em busca de novos desafios que 
            me permitam aplicar e expandir minhas habilidades no mundo do desenvolvimento de software.
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
