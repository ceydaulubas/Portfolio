import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Route exact path="/skills" component={Skills}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App;
