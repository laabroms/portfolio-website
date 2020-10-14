import React from "react";
// eslint-disable-next-line 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/home";
import About from './screens/about';
import Contact from "./screens/contact";
import Resume from "./screens/resume";

export default function Routes() {
  return (
    <Router>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          
        </Switch>
    </Router>
  );
}
