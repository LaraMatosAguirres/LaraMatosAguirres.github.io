import {ReactComponent as Estrelas} from "../../assets/images/Estrelas.svg"
import {ReactComponent as MolduraNeon} from "../../assets/images/Moldura_Neon.svg"
import CurriculoPTBT from "../../pds/curriculo_pt_bt/Lara_Matos_Aguirres_Eng_Software_PT_BR.pdf"
import CurriculoENG from "../../pds/curriculo_eng/Lara_Matos_Aguirres_Eng_Software_En.pdf"
import useScrollAnimation from "../../Hooks/useScrollAnimation";
import "../../Animation.css"
import "./styles.css"

const Curriculum = () => {
    // Refs para animações sequenciais
    const titleRef = useScrollAnimation('fadeInDown', 0.2);
    const frameRef = useScrollAnimation('fadeIn', 0.2, 200);
    const downloadRef = useScrollAnimation('fadeInUp', 0.3, 300);
    const course1Ref = useScrollAnimation('fadeInLeft', 0.3, 400);
    const course2Ref = useScrollAnimation('fadeInRight', 0.3, 500);
    const course3Ref = useScrollAnimation('fadeInUp', 0.3, 600);


    return(
        <div className="curriculo-container">
            {/* Background estático */}
            <div className="estrelas-imagem">
                <Estrelas />
            </div>
            
            {/* Título animado */}
            <div 
                ref={titleRef}
                className="titulo-curriculo-container animate-element fadeInDown"
            >
                <h1>Currículo</h1>  
            </div>
            
            {/* Container do retângulo */}
            <div className="retangulo-container"></div>
            
            {/* Moldura com animação */}
            <div 
                ref={frameRef}
                className="moldura-neon-container animate-element fadeIn"
            >
                <MolduraNeon />
            </div>
            
            <div id="carouselCurriculoControls" className="carousel slide carousel-curriculo-container carousel-animate" data-bs-ride="false">
                <div className="carousel-inner carousel-inner-container">
                    {/* Slide 1 - Opções de Download */}
                    <div className="carousel-item active carousel-item-container">
                        <div 
                            ref={downloadRef}
                            className="opcoes-curriculo-container animate-element fadeInUp"
                        >
                            <h2>Clique na versão que deseja baixar:</h2>
                            <a href={CurriculoPTBT} download="Lara_Matos_Aguirres_Eng_Software_PT_BR.pdf">
                                <p>Português</p>
                            </a>
                            
                            <div className="linha-horizontal-container"></div>
                            <a href={CurriculoENG} download="Lara_Matos_Aguirres_Eng_Software_Eng.pdf">
                                <p>Inglês</p>
                            </a>
                            
                        </div>
                    </div>
                    
                    {/* Slide 2 - Engenharia de Software */}
                    <div className="carousel-item carousel-item-container">
                        <div 
                            ref={course1Ref}
                            className="curso-container animate-element fadeInLeft"
                        >
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
                    
                    {/* Slide 3 - Backend */}
                    <div className="carousel-item carousel-item-container">
                        <div 
                            ref={course2Ref}
                            className="curso-container animate-element fadeInRight"
                        >
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
                    
                    {/* Slide 4 - Frontend */}
                    <div className="carousel-item carousel-item-container">
                        <div 
                            ref={course3Ref}
                            className="curso-container animate-element fadeInUp"
                        >
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