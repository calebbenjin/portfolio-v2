import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Tutorials from "./pages/Tutorials";
import SinglePost from "./pages/SinglePost";
import Contact from "./pages/Contact";
import Error from "./pages/Error404";

const App = () => {
  return <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/tutorials">
          <Tutorials />
        </Route>
        <Route path="/post/:id" children={<SinglePost />} />
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
};

export default App;
