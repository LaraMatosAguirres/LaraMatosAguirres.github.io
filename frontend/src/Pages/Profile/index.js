import {ReactComponent as Nebulosa} from "../../assets/images/Nebulosa.svg"
import DSCatalogImage from '../../assets/images/DSCatalog.png';
import DSMeta from '../../assets/images/DSMeta.png';
import DSViacep from '../../assets/images/DSViaCep.png';
import ChessSystem from '../../assets/images/ChessSystem.png';
import useScrollAnimation from "../../Hooks/useScrollAnimation";
import "../../Animation.css"
import "./styles.css"

const Profile = () => {
    // Refs para animações dos projetos
    const titleRef = useScrollAnimation('fadeInDown', 0.2);
    const project1Ref = useScrollAnimation('fadeInLeft', 0.3, 200);
    const project2Ref = useScrollAnimation('fadeInUp', 0.3, 300);
    const project3Ref = useScrollAnimation('fadeInDown', 0.3, 400);
    const project4Ref = useScrollAnimation('fadeInRight', 0.3, 500);

    return(
        <div className="profile-container">
            {/* Background nebulosa */}
            <div className="nebulosa-container">
                <Nebulosa />
            </div>
            
            {/* Título animado */}
            <div 
                ref={titleRef}
                className="titulo-container animate-element fadeInDown"
            >
                <h1>Projetos</h1>
            </div>
            
            {/* Caixas de fundo estáticas */}
            <div className="caixa-projeto-container"></div>
            <div className="caixa-projeto-container caixa-dois"></div>
            <div className="caixa-projeto-container caixa-tres"></div>
            <div className="caixa-projeto-container caixa-quatro"></div>
            
            <div id="carouselSpecializationControls" className="carousel slide carousel-fade carousel-profile-container carousel-animate" data-bs-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-container">
                        <div className="carrosel-styles">
                            {/* Projeto 1 - DSCatalog */}
                            <div 
                                ref={project1Ref}
                                className="projeto-container animate-element fadeInLeft"
                            >
                                <a href="https://github.com/LaraMatosAguirres/DSCatalog-projectReact">
                                    <img src={DSCatalogImage} alt="Tela inicial do projeto DsCatalog" />
                                    <h5>DSCatalog</h5>
                                    <p>Uma lojinha online feita com SpringBoot e React, clique para dar uma olhada no projeto!</p>
                                </a>  
                            </div>
                            
                            {/* Projeto 2 - DSMeta */}
                            <div 
                                ref={project2Ref}
                                className="projeto-container dsmeta-container animate-element fadeInUp delay-100"
                            >
                                <a href="https://github.com/LaraMatosAguirres/DSMeta">
                                    <img src={DSMeta} alt="Tela inicial do projeto DSMeta" />
                                    <h5>DSMeta</h5>
                                    <p>Acompanhe uma lista de vendas ordenadas por data e com integração com SMS, clique para dar uma olhada no projeto!</p>
                                </a>  
                            </div>
                            
                            {/* Projeto 3 - DSViaCep */}
                            <div 
                                ref={project3Ref}
                                className="projeto-container dsviacep-container animate-element fadeInDown delay-200"
                            >
                                <a href="https://github.com/LaraMatosAguirres/dsviacep">
                                    <img src={DSViacep} alt="Tela inicial do projeto DSViaCep" />
                                    <h5>DSViaCep</h5>
                                    <p>Consulte seu endereço por meio desse site, clique para dar uma olhada no projeto!</p>
                                </a>  
                            </div>
                            
                            {/* Projeto 4 - Chess System */}
                            <div 
                                ref={project4Ref}
                                className="projeto-container chess-system-container animate-element fadeInRight delay-300"
                            >
                                <a href="https://github.com/LaraMatosAguirres/chess-system-java">
                                    <img src={ChessSystem} alt="Tela inicial do projeto Chess System" />
                                    <h5>ChessSystem</h5>
                                    <p>Jogue xadrez contra o computador ou com amigos, clique para dar uma olhada no projeto!</p>
                                </a>  
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Profile;