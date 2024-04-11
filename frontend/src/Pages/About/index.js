import React, { useEffect, useState } from "react";
import NavbarBack from "../../components/NavbarBack";
import MinhaFoto from "../../assets/images/Minha-foto.jpeg";
import { motion } from "framer-motion";
import "./styles.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 5000 milissegundos = 5 segundos
  }, []);

  return (
    <motion.div
      className="about-container container-fluid"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
    >
      <div className="about-content-container ">
        <div className="photo-container">
          <img src={MinhaFoto} alt="Uma foto minha de camisa azul" />
        </div>

        <div>
          <div className="about-me-content-container col">
            <h4>Quem eu sou?</h4>
            <div>
              <p>
                Olá! Me chamo Lara Matos Aguirres, gosto de música, cães, gatos
                e amo uma boa aventura, não importando a forma que ela tenha.
                Moro numa chácara com meus pais, irmãos e um gatinho muito lindo
                que se chamado Sujinho. Sou desenvolvedora fullstack, operando
                dos dois lados da moeda para websites, tornando a vida do
                usuário uma pequena jornada fantástica e segura durante a
                navegação.{" "}
              </p>
              <p>
                Confesso que nunca imaginei que um dia estaria na frente de um
                computador desenvolvendo códigos em Java ou TypeScript, sempre
                achei que seria da área de humanas, mais especificamente
                desvendando a mente humana e seus diversos traumas e alegrias.
                E, como a vida tem mania de nos supreender, meu primeiro grande
                susto foi conseguir passar para Ciências Contábeis pelo Enem.{" "}
              </p>
              <p>
                Logo depois, acredito eu que o fator decisivo para em fim virar
                para a área do Desenvolvimento Web, foi falhar após algumas
                tentativas com vendas online. No meio tempo entre vendas online
                e a faculdade, tive meu primeiro contato com a programação em um
                estágio em um escritório de contabilidade, onde as planilhas e
                os macros do google se mostraram um verdadeiro enigma.{" "}
              </p>
              <p>
                Estes dois eventos foram marcantes o suficiente para que eu me
                voltasse aos programas e descobrisse que a lógica por trás de um
                site poderia ser uma jornada tão épica -e ligeiramente
                trabalhosa rs - quanto Senhor do Anéis, Dangeons and Dragons, ou
                qualquer outra aventura medieval fantástica.{" "}
              </p>
              <p>
                Desde então, a área de desenvolvimento tem se mostrado um
                esforço diário, onde a determinação, a disciplina e a paciência,
                além da busca continua por conhecimento, estão sendo testados e
                me fortalecido um pouco mais a cada desafio/batalha vencida.{" "}
              </p>
              <p>
                Acredito eu que a melhor parte de uma boa aventura é a evolução
                que o personagem apresenta do começo ao fim. Este é o meu desejo
                mais profundo: evoluir até o meu fim.
              </p>
            </div>
          </div>
          <div className="experience-content-container">
            <h6>EXPERIÊNCIA</h6>
            <p>
              Apesar de ainda não ter uma experiência real no mercado de
              trabalho, desenvolvi projetos pessoais localizados no meu{" "}
              <a href="/#/profile">Portifólio</a>. Lá você encontrará uma
              descrição sobre cada um deles e uma breve apresentação sobre o
              funcionamento, bem como as tecnologias que os envolvem.
            </p>
          </div>
          <div className="skills-content-container">
            <h6>SKILLS</h6>
            <p>-Java8, lógica de programação e orientação a objetos</p>
            <p>-Desenvolvimento backend orientado a Testes Automatizados</p>
            <p>-Spring Boot</p>
            <p>-Docker, PostgreSQL e MongoDB</p>
            <p>-JavaScritp e TypeScript</p>
            <p>-React.js</p>
            <p>-Node.js</p>
            <p>-Bootstrap e SASS</p>
            <p>-HTML e CSS</p>
          </div>
          <div>
            <h6>AGRADECIMENTOS</h6>
            <p>
              Esta é uma pequena dedicatória as pessoas que fizeram parte da
              minha trajetória até aqui. Como nenhuma história é contada sozinha
              e sim por um conjunto de pessoas unidas, quero que essas pessoas
              saibam que foram marcantes na minha jornada e que terão meus
              sinceros e eternos agradecimentos: JURANDI DIAS DE CARVALHO,
              SILVIA MATOS CARVALHO, ALESSANDRO AGUIRRES CORREIA E LAILA DEVAI.
              Também agradeço a você que leu até aqui, que teve a paciência e a
              curiosidade que me permitiu compartilhar um pouquinho de mim por
              essa página.
            </p>
          </div>
        </div>
        <div className="back-nav-bar">
          <NavbarBack />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
