import React from "react";

import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
