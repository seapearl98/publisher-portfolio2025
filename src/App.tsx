import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
