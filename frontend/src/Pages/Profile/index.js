import {ReactComponent as Nebulosa} from "../../assets/images/Nebulosa.svg"
import DSCatalogImage from '../../assets/images/DSCatalog.png';
import DSMeta from '../../assets/images/DSMeta.png';
import DSViacep from '../../assets/images/DSViaCep.png';
import ChessSystem from '../../assets/images/ChessSystem.png';
import "./styles.css"

const Profile = () => {
    return(
        <div className="profile-container">
            <div className="nebulosa-container">
                <Nebulosa />
            </div>
            <div className="titulo-container">
                <h1>Projetos</h1>
            </div>
            <div className="caixa-projeto-container"></div>
            <div className="caixa-projeto-container caixa-dois"></div>
            <div className="caixa-projeto-container caixa-tres"></div>
            <div className="caixa-projeto-container caixa-quatro"></div>
            <div id="carouselSpecializationControls" className="carousel slide carousel-fade carousel-profile-container" data-bs-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-container">
                        <div className="carrosel-styles">
                            <div className="projeto-container">
                                <a href="https://github.com/LaraMatosAguirres/DSCatalog-projectReact">
                                <img src={DSCatalogImage} alt="Tela inicial do projeto DsCatalog" />
                                <h5>DSCatalog</h5>
                                <p>Uma lojinha online feita com SpringBoot e React, clique para dar uma olhada no projeto!</p>
                                </a>  
                            </div>
                            <div className="projeto-container dsmeta-container">
                                <a href="https://github.com/LaraMatosAguirres/DSMeta">
                                <img src={DSMeta} alt="Tela inicial do projeto DsCatalog" />
                                <h5>DSMeta</h5>
                                <p>Acompanhe uma lista de vendas ordenadas por data e com integração com SMS, clique para dar uma olhada no projeto!</p>
                                </a>  
                            </div>
                            <div className="projeto-container dsviacep-container">
                                <a href="https://github.com/LaraMatosAguirres/dsviacep">
                                <img src={DSViacep} alt="Tela inicial do projeto DsCatalog" />
                                <h5>DSViaCep</h5>
                                <p>Consulte seu endereço por meio desse site, clique para dar uma olhada no projeto!</p>
                                </a>  
                            </div>
                            <div className="projeto-container chess-system-container">
                                <a href="https://github.com/LaraMatosAguirres/chess-system-java">
                                <img src={ChessSystem} alt="Tela inicial do projeto DsCatalog" />
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