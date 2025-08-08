import {ReactComponent as Estrelas_Topo} from "../../assets/images/Estrelas_Topo.svg"
import {ReactComponent as GitHub} from "../../assets/images/Github.svg"
import {ReactComponent as Linkedin} from "../../assets/images/Linkedin.svg"
import {ReactComponent as Email} from "../../assets/images/email.svg"
import useScrollAnimation from "../../Hooks/useScrollAnimation";
import "../../Animation.css"
import "./styles.css"

const Contacts = () => {
    // Refs para animações sequenciais
    const titleRef = useScrollAnimation('fadeInDown', 0.2);
    const githubRef = useScrollAnimation('fadeInLeft', 0.3, 200);
    const linkedinRef = useScrollAnimation('fadeInUp', 0.3, 300);
    const emailRef = useScrollAnimation('fadeInRight', 0.3, 400);

    return (
        <div className="contatos_principal_container">
            {/* Background estático */}
            <div className="estrelas-imagem">
                <Estrelas_Topo />
            </div>
            
            {/* Título animado */}
            <div 
                ref={titleRef}
                className="titulo-contato animate-element fadeInDown"
            >
                <h1>Contate-me</h1>
            </div>
            
            {/* Container dos contatos com animações individuais */}
            <div className="forma-de-contato-container">
                <a 
                    ref={githubRef}
                    href="https://github.com/LaraMatosAguirres" 
                    className="contato-item animate-element fadeInLeft"
                >
                    <GitHub />
                </a>
                
                <a 
                    ref={linkedinRef}
                    href="https://www.linkedin.com/in/lara-matos-aguirres-3a632b244/" 
                    className="contato-item animate-element fadeInUp delay-100"
                >
                    <Linkedin />
                </a>
                
                <a 
                    ref={emailRef}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=laramatosaguirres@gmail.com&su=Olá%20Lara!&body=Gostaria%20de%20entrar%20em%20contato%20com%20você." 
                    className="contato-item animate-element fadeInRight delay-200"
                >
                    <Email />
                </a>
            </div>
        </div>
    )
}

export default Contacts;