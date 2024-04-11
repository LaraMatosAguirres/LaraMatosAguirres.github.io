import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";

function RoutesHome() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Router location={location} key={location.pathname}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </AnimatePresence>
  );
}
export default RoutesHome;
