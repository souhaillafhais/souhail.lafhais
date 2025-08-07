// @ts-nocheck
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import MySkills from "./components/3-skills/MySkills";
import Main from "./components/5-main/Main";
import Contact from "./components/6-contact/Contact";
import Footer from "./components/7-footer/Footer";
import Certif from "./components/4-certif/certif";

import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) setScrollbtn(true);
      else setScrollbtn(false);
    });
  }, []);

  const [showScrollbtn, setScrollbtn] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="line" />
      <MySkills />
      <div className="line" />
      <Main />
      <div className="line" />
      <Certif />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
      <a style={{ opacity: showScrollbtn? 1 :0, transition: "0.3s" }} href="#up">
        <button className="scroll icon-up"></button>
      </a>
    </div>
  );
}

export default App;
