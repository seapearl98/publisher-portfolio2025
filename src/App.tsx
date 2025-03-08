import React, { useRef } from "react";

import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const goToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    if (sectionRef.current) {
      const scrollPosition = sectionRef.current.offsetTop;
      const targetPosition = scrollPosition;

      gsap.to(window, {
        scrollTo: targetPosition,
        duration: 1,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="App">
      <Header
        goToSection={goToSection}
        introRef={introRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Intro ref={introRef} />
      <Experience />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </div>
  );
}

export default App;
