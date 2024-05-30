import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";

function RoutesHome() {
  return (
    <Router>
      <AnimatePresence>
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
      </AnimatePresence>
    </Router>
  );
}
export default RoutesHome;
