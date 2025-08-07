import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animations/dev.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.3)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            src="public\1.png"
            className="avatar flex"
          />
          <h2 className="name flex">SOUHAIL LAFHAIS</h2>
        </div>

        <h1 className="title">
          IT STUDENT , <br /> FULL STACK DEVELOPER
        </h1>
        <p className="description">
          Engineering student in computer science passionate about the design,
          development, and optimization of software solutions.
        </p>
        <div className="icons flex">
          <a theme href="https://github.com/souhaillafhais" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/souhail-lafhais/" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>
      <div className="right-section">
        <Lottie
          className="dev-animation"
          style={{ height: "500px" }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
