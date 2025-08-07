import React from "react";
import {ReactComponent as Estrelas_Topo} from "../../assets/images/Estrelas_Topo.svg"
import Specialization from "../../components/Specialization";
import Curriculum from "../Curriculum";
import Profile from "../Profile";
import Contacts from "../Contact";
import "./style.css"

const Home = () => {
    return(
        <div className="home-container">
            <div className="estrelas-imagem">
                <Estrelas_Topo />
            </div>
            <div className="texto-inicial">
                <h1>Olá! Meu nome é Lara</h1>
                <h2>Sou desenvolvedora FullStack</h2>
                <h5>Role para baixo e veja meu trabalho</h5>
            </div>
            <div>
                <Specialization />
            </div>
            <div>
                <Curriculum />
            </div>
            <div>
                <Profile />
            </div>
            <div>
                <Contacts />
            </div>
        </div>
        
    )
}

export default Home;