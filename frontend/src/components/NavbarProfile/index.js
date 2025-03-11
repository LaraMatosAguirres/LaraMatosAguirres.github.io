import React from "react";
import "./styles.css";

const NavbarProfile = () => {
  return (
    <div className="nav-profile-container navbar-collapse">
      <ul className="navbar-nav position-relative">
        <li>
          <a
            href="https://github.com/LaraMatosAguirres/DSCatalog-projectReact"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-profile-item nav-profile-item-dscatalog"
          >
            <h1>DSCatalog</h1>
            <p>Explore um catálogo web seguro, intuitivo e feito para você! 🔒✨</p>
            <p>Clique aqui para ver o projeto :D</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LaraMatosAguirres/dsviacep"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-profile-item"
          >
            <h1>DSViaCep</h1>
            <p>Quer pesquisar seu endereço pelo cep? Consulte por aqui</p>
            <p>Clique aqui para ver o projeto :D</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LaraMatosAguirres/chess-system-java"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-profile-item"
          >
            <h1>ChessSystem</h1>
            <p>Que tal jogar xadrez no terminal do seu computador?</p>
            <p>Clique aqui para ver o projeto :D</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LaraMatosAguirres/DSMeta"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-profile-item"
          >
            <h1>DSMeta</h1>
            <p>Filtre suas vendas e receba um SMS quando cada venda for realizada!</p>
            <p>Clique aqui para ver o projeto :D</p>
          </a>
        </li>
        <div className="setaBaixo"></div>
      </ul>
    </div>
  );
};

export default NavbarProfile;
