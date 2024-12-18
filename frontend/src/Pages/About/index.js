import React from "react";
import MinhaFoto from "../../assets/images/Minha-foto.jpeg";
import "./styles.css";

const About = () => {

  return (    
      <div className="about-container ">
               
        <div className="photo-container">
          <img src={MinhaFoto} alt="Uma foto minha de camisa azul" />
        </div>
        <div className="about-content-container ">
          <div className="about-me-content-container col">
            <h4>Quem eu sou?</h4>
            <div>
              <p>
              Olá! Sou Lara Matos Aguirres, uma desenvolvedora fullstack apaixonada por criar soluções 
              inovadoras e eficientes para a web. Com um amor por desafios e aprendizado contínuo, 
              mergulhei na área de desenvolvimento de software após uma jornada um tanto inusitada.{" "}
              </p>
              <p>
              Embora minha formação inicial tenha sido em Ciências Contábeis, minha paixão por resolver 
              problemas e otimizar processos me levou ao mundo da programação. Comecei com projetos pessoais 
              e rapidamente percebi que a lógica por trás do desenvolvimento de websites é, para mim, uma 
              verdadeira jornada épica - cheia de desafios e recompensas.{" "}
              </p>
              <p>
              Hoje, como desenvolvedora fullstack, tenho a oportunidade de trabalhar tanto 
              no frontend quanto no backend, criando experiências digitais seguras e agradáveis 
              para os usuários. Sou movida pela ideia de que cada linha de código é uma pequena 
              conquista em um caminho de evolução constante.{" "}
              </p>
            </div>
          </div>
          <div className="experience-content-container">
            <h6>EXPERIÊNCIA</h6>
            <p>
            Embora eu ainda esteja em início de carreira no mercado de trabalho, já tenho 
            uma sólida base de conhecimento e experiência prática em diversos projetos pessoais. 
            Para ver alguns desses projetos, visite meu Portfólio, onde compartilho detalhes sobre 
            cada um, incluindo as tecnologias usadas e os desafios enfrentados. Acredito que essas 
            experiências demonstram minha capacidade de aprender rapidamente e adaptar-me a novas tecnologias.
            </p>
          </div>
          <div className="skills-content-container">
            <h6>SKILLS</h6>
            <p>-Java 8: Forte compreensão de lógica de programação e orientação a objetos.</p>
            <p>-Desenvolvimento Backend: Experiência com Spring Boot e foco em testes automatizados.</p>
            <p>-Containers e Banco de Dados: Familiaridade com PostgreSQL e MongoDB.</p>
            <p>-Frontend: Proficiência em JavaScript, TypeScript, React.js, HTML5, CSS3 e Bootstrap.</p>
            <p>-Metodologias Ágeis: Experiência em trabalhar com Scrum e Kanban, priorizando entregas incrementais e colaborativas.</p>
            <p>-Controle de Versão: Experiência com Git para versionamento de código e colaboração em equipe, incluindo práticas de branching e code review. Familiaridade com GitHub e GitLab para pipelines de CI/CD e gestão de repositórios.</p>
          </div>
        </div>
      </div>
  );
};

export default About;
