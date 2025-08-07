import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import {ReactComponent as MinhaFoto} from "../../assets/images/Foto_Minha.svg"
import {ReactComponent as Play} from "../../assets/images/play.svg"
import "./style.css";

const Specialization = () => {
    return (
        <div className="specialization-container">
            <div id="carouselSpecializationControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <div className="carrosel-styles">
                            <div className="texto-specialization-container">
                                <h1>Como trabalho?</h1>
                                <div className="texto-specialization">
                                    <p>Desenvolvo aplicações web completas, com atenção especial à segurança dos dados, escalabilidade da arquitetura e desempenho da solução. Participo ativamente de todas as etapas do desenvolvimento, desde o planejamento técnico até a entrega, utilizando tecnologias como Spring Boot e React para garantir aplicações robustas e modernas.</p>
                                    <p>Tenho experiência com projetos que envolvem inteligência artificial e integração de sistemas, sempre buscando alinhar as decisões técnicas às necessidades do negócio. Com foco em qualidade e evolução contínua, colaboro com times ágeis, contribuindo para um desenvolvimento fluido e bem estruturado.</p>
                                    <p>Mesmo como desenvolvedora júnior, trago comigo uma postura proativa, vontade constante de aprender e o compromisso de entregar soluções que façam sentido para quem vai usar e manter o sistema.</p>
                                </div>
                                
                            </div>
                            <div className="minha-foto">
                                <MinhaFoto />
                            </div>
                        </div>
                        
                    </div>
                    <div className="carousel-item">
                        <div className="texto-container-quem-sou-eu">
                            <div className="titulo-quem-sou-eu">
                                <h1>Quem sou eu?</h1>
                                <p>Eu me considero boa em:</p>
                            </div>
                            <div className="texto-quem-sou-eu">
                                <div className="play-imagem">
                                    <h2>Clique para ver!</h2>
                                    <Play />
                                    <p>Se quiser saber mais sobre mim, meus gostos e curiosidades, clique no play!</p>
                                </div>
                                <div className="aprender-container">
                                    <h2>Aprender</h2>
                                    <p>Vejo o aprendizado como uma forma de crescer, não só profissionalmente, mas também como pessoa. Estou sempre em busca de conhecimento, coisas que me façam abrir a mente, seja na matemática, na filosofia, na história ou na psicologia.</p>
                                    <p>Foi dessa forma que me tornei a pessoa que sou hoje, capaz de ver a realidade com novos olhos todos os dias.</p>
                                </div>
                                <div className="aprender-container">
                                    <h2>Resiliencia</h2>
                                    <p>Apesar de gostar de aprender, infelizmente não fui abençoada com uma inteligência a cima da média, o que significa que preciso me esforçar para entender aquilo que tento colocar em minha mente.</p>
                                    <p>Transformei minha fraqueza em força e hoje posso dizer que sou mais resistente aos desafios que me proporcionam, seja na vida ou no trabalho.</p>
                                </div>
                                <div className="caracterisca-container">
                                    <h2>Iniciativa</h2>
                                    <p>Não tenho medo de tentar. A vida é cheia de “nãos” — e eu já ouvi muitos, seja no empreendedorismo, seja na vaga internacional que não deu certo. Mas nenhum deles foi capaz de me parar.</p>
                                    <p>Se eu ainda não sei algo, eu corro atrás. Se não sou qualificada o suficiente, eu me qualifico. Tenho consciência de onde estou e clareza de onde quero chegar.</p>
                                    <p>Como um velho sábio me disse uma vez: “O não eu já tenho. Agora, vou atrás do sim.” — e é exatamente assim que sigo em frente, com iniciativa, resiliência e vontade de fazer acontecer.</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div> 

                 <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselSpecializationControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselSpecializationControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    )
}

export default Specialization;