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
          <Route exact path="/discover-together" render={() => (window.location.href = "https://discover-together.com")} />
          <Route exact path="/scholastic" render={() => (window.location.href = "https://laabroms.github.io/book_reviews_deploy/#/books")} />
          <Route exact path="/brs" render={() => (window.location.href = "http://www.bruinrideshare.com")} />
          <Route exact path="/facebook" render={() => (window.location.href = "https://www.facebook.com/lucas.abroms")} />
          <Route exact path="/instagram" render={() => (window.location.href = "https://www.instagram.com/edits.laa/?hl=en")} />
          <Route exact path="/linkedin" render={() => (window.location.href = "https://www.linkedin.com/in/lucasabroms")} />
          <Route exact path="/github" render={() => (window.location.href = "https://www.github.com/laabroms")} />
          
        </Switch>
    </Router>
  );
}
