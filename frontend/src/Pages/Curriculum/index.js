import {ReactComponent as Estrelas} from "../../assets/images/Estrelas.svg"
import {ReactComponent as Moldura_Neon} from "../../assets/images/Moldura_Neon.svg"
import "./styles.css"

const Curriculum = () => {
    return(
        <div className="curriculo-container">
            <div className="estrelas-imagem">
                <Estrelas />
            </div>
            <div className="titulo-curriculo-container">
                <h1>Currículo</h1>  
            </div>
            <div className="retangulo-container">
                
            </div>
            <div className="moldura-neon-container">
                <Moldura_Neon />
            </div>
            <div id="carouselCurriculoControls" className="carousel slide carousel-curriculo-container" data-bs-ride="false">
                <div className="carousel-inner carousel-inner-container">
                    <div className="carousel-item active carousel-item-container">
                        <div className="opcoes-curriculo-container">
                            <h2>Clique na versão que deseja baixar:</h2>
                            <p>Português</p>
                            <div className="linha-horizontal-container"></div>
                            <p>Inglês</p>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-container">
                        <div className="curso-container">
                            <h2>Engenharia de Software</h2>
                            <p>Em busca de aprimoramento profissional e de uma visão completa sobre o ciclo de vida do desenvolvimento de software, adquiri conhecimento em processos de gerenciamento e desenvolvimento voltados à entrega de soluções de qualidade. Ao longo dessa trajetória, aprofundei meus estudos em:</p>
                            <div className="habilidades-container">
                                <div className="habilidades-coluna-esquerda">
                                     <div className="linha-vertical-container"></div>
                                    <div className="habilidades-container-direita">
                                        <p>Metodologias Ágeis</p>
                                        <p>Qualidade do Código Fonte(Clean Code)</p>
                                        <p>Qualidade de Software</p>
                                        <p>Teste de Software</p>
                                        <p>Padrões de Projetos(Design Patterns)</p>
                                    </div>
                                </div>
                                <div className="habilidades-coluna-esquerda">
                                    <div className="linha-vertical-container"></div>
                                    <div className="habilidades-container-direita"> 
                                        <p>Controle de Versões e Mudanças</p>
                                        <p>Análise e Especificação de Requisitos</p>
                                        <p>Gestão de Projetos com Scrum </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="carousel-item carousel-item-container">
                        <div className="curso-container">
                            <h2>Desenvolvedora Backend</h2>
                            <p>Minhas habilidades como desenvolvedora backend abrangem desde o trabalho com bancos de dados relacionais e não relacionais — como PostgreSQL, MySQL, MongoDB e Firebase — até o uso de frameworks web, com ênfase em Spring Boot. Tenho domínio das linguagens Java, C# e Python, com foco especial em aplicações voltadas para automação de sistemas. Além disso, possuo experiência em desenvolvimento de aplicações em nuvem, especialmente utilizando a plataforma Google Cloud.</p>
                            <div className="habilidades-container">
                                <div className="habilidades-coluna-esquerda">
                                     <div className="linha-vertical-container"></div>
                                    <div className="habilidades-container-direita">
                                        <p>Java</p>
                                        <p>Python</p>
                                        <p>C#</p>
                                        <p>Spring Boot</p>
                                        <p>Maven</p>
                                    </div>
                                </div>
                                <div className="habilidades-coluna-esquerda">
                                    <div className="linha-vertical-container"></div>
                                    <div className="habilidades-container-direita"> 
                                        <p>JPA/JDBC</p>
                                        <p>Hibernate</p>
                                        <p>Node.js</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-container">
                        <div className="curso-container">
                            <h2>Desenvolvedora Frontend</h2>
                            <p>Como desenvolvedora frontend, possuo conhecimentos em HTML, CSS, Bootstrap e React. Desenvolvo interfaces simples, porém funcionais e visualmente agradáveis, sempre priorizando a usabilidade e a experiência do usuário.</p>
                            <div className="habilidades-container">
                                <div className="habilidades-coluna-esquerda">
                                     <div className="linha-vertical-container"></div>
                                    <div className="habilidades-container-direita">
                                        <p>Java Script</p>
                                        <p>TypeScript</p>
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>React</p>
                                    </div>
                                </div>
                                <div className="habilidades-coluna-esquerda">
                                    <div className="linha-vertical-container"></div>
                                    <div className="habilidades-container-direita"> 
                                        <p>Bootstrap</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselCurriculoControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselCurriculoControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Curriculum;