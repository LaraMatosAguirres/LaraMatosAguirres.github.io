import React, { useEffect, useState } from "react";
import NavbarBottom from "../../components/NavbarBottomHome";
import NavbarTop from "../../components/NavbarTop";
import Specialization from "../../components/Specialization";
import { motion } from "framer-motion";
import "./styles.css";
import Profile from "../Profile";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 5000 milissegundos = 5 segundos
  }, []);
  return (
    <motion.nav
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
    >
      <div className="nav-content-container container-fluid">
        <div className="nav-item-bottom-container row">
          <div className="content-item content-item-specialization">
            <Specialization />
          </div>
        </div>
        {/* <div className="content-item">
            <Profile />
          </div>
        <div className="top-nav-bar ">
          <NavbarTop />
        </div>*/}
      </div>
    </motion.nav>
  );
};

export default Home;
