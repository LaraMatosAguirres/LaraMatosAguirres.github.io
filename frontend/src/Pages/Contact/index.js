import React, { useEffect, useState } from "react";
import { ReactComponent as Linkedin } from "../../assets/images/Linkedin.svg";
import { ReactComponent as Github } from "../../assets/images/Github.svg";
import { motion } from "framer-motion";
import "./styles.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 5000 milissegundos = 5 segundos
  }, []);

  return (
    <motion.div
      className="contact-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
    >
      <div className="content-contact-container row">
        <div className="col">
          <p>Gostou do meu portifólio e deseja me contatar?</p>
          <p>Email: lara.laramatos@gmail.com</p>
          <div>
            <a
              href="https://www.linkedin.com/in/lara-matos-aguirres-3a632b244/"
              target="_blank"
              rel="noopener noreferrer"
              className="content-social-svg"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/LaraMatosAguirres"
              target="_blank"
              rel="noopener noreferrer"
              className="content-social-svg"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
