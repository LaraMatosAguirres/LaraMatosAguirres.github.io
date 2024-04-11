import React, { useEffect, useState } from "react";
import NavbarBack from "../../components/NavbarBack";
import NavbarProfile from "../../components/NavbarProfile";
import { motion } from "framer-motion";
import "./styles.css";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 5000 milissegundos = 5 segundos
  }, []);

  return (
    <motion.nav
      className="profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
    >
      <div className="nav-profile-content-container">
        <div className="nav-profile-items-container container-fluid">
          <div className="profile-content-item row">
            <div className="profile-text-content-container col">
              <h6>MEUS PROJETOS</h6>
              <p>
                Aqui você encontra os meus melhores projetos, por favor, fique a
                vontade para olhar {":)"}
              </p>
            </div>
          </div>

          <div className="profile-content-item">
            <NavbarProfile />
          </div>
        </div>
        <div className="top-nav-bar">
          <NavbarBack />
        </div>
      </div>
    </motion.nav>
  );
};

export default Profile;
