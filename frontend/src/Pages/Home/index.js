import React from "react";
import {ReactComponent as EstrelasTopo} from "../../assets/images/Estrelas_Topo.svg"
import Specialization from "../../components/Specialization";
import Curriculum from "../Curriculum";
import Profile from "../Profile";
import Contacts from "../Contact";
import useScrollAnimation from "../../Hooks/useScrollAnimation";
import "../../Animation.css"
import "./style.css"

const Home = () => {
    // Refs para cada seção com diferentes animações
    const heroRef = useScrollAnimation('fadeInDown', 0.1);
    const specializationRef = useScrollAnimation('fadeInLeft', 0.15);
    const curriculumRef = useScrollAnimation('fadeInRight', 0.15);
    const profileRef = useScrollAnimation('fadeInUp', 0.15);
    const contactsRef = useScrollAnimation('fadeInUp', 0.2);

    return(
        <div className="home-container">
            {/* Background estático das estrelas */}
            <div className="estrelas-imagem">
                <EstrelasTopo />
            </div>
            
            {/* Hero Section - Fade Down (vem de cima) */}
            <div 
                ref={heroRef} 
                className="texto-inicial animate-element fadeInDown"
            >
                <h1>Olá! Meu nome é Lara</h1>
                <h2>Sou desenvolvedora FullStack</h2>
                <h5>Role para baixo e veja meu trabalho</h5>
            </div>
            
            {/* Seção Specialization - Fade Left (vem da esquerda) */}
            <div 
                ref={specializationRef} 
                className="animate-element fadeInLeft"
            >
                <Specialization />
            </div>
            
            {/* Seção Curriculum - Fade Right (vem da direita) */}
            <div 
                ref={curriculumRef} 
                className="animate-element fadeInRight"
            >
                <Curriculum />
            </div>
            
            {/* Seção Profile - Fade Up (vem de baixo) */}
            <div 
                ref={profileRef} 
                className="animate-element fadeInUp"
            >
                <Profile />
            </div>
            
            {/* Seção Contacts - Fade Up com delay (vem de baixo) */}
            <div 
                ref={contactsRef} 
                className="animate-element fadeInUp delay-200"
            >
                <Contacts />
            </div>
        </div>
        
    )
}

export default Home;