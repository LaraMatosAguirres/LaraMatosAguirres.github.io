import {ReactComponent as Estrelas_Topo} from "../../assets/images/Estrelas_Topo.svg"
import {ReactComponent as GitHub} from "../../assets/images/Github.svg"
import {ReactComponent as Linkedin} from "../../assets/images/Linkedin.svg"
import {ReactComponent as Email} from "../../assets/images/email.svg"
import "./styles.css"

const Contacts = () => {

    return (
        <div className="contatos_principal_container">
            <div className="estrelas-imagem">
                <Estrelas_Topo />
                </div>
                <div className="titulo-contato">
                    <h1>Contate-me</h1>
                </div>
            <div className="forma-de-contato-container">
                <a href="https://github.com/LaraMatosAguirres" className="contato-item">
                    <GitHub />
                </a>
                <a href="https://www.linkedin.com/in/lara-matos-aguirres-3a632b244/" className="contato-item">
                    <Linkedin />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=laramatosaguirres@gmail.com&su=Olá%20Lara!&body=Gostaria%20de%20entrar%20em%20contato%20com%20você." className="contato-item">
                    <Email />
                </a>
            </div>
        </div>
    )
}

export default Contacts;
    
