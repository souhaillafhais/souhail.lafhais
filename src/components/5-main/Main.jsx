import { useState } from "react";
import "./Main.css";
import { projects } from "./projects";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(projects);
  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarr(projects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setcurrentActive("django");
            const newArr = projects.filter((item) => {
              const firstArr = item.category.filter((myitem) => {
                return myitem === "django";
              });

              return firstArr[0] === "django";
            });
            setarr(newArr);
          }}
          className={currentActive === "django" ? "active" : null}
        >
          Django
        </button>

        <button
          onClick={() => {
            setcurrentActive("pyqt");
            const newArr = projects.filter((item) => {
              const firstArr = item.category.filter((myitem) => {
                return myitem === "pyqt";
              });

              return firstArr[0] === "pyqt";
            });
            setarr(newArr);
          }}
          className={currentActive === "pyqt" ? "active" : null}
        >
          PyQt5
        </button>

        <button
          onClick={() => {
            setcurrentActive("hc");
            const newArr = projects.filter((item) => {
              const firstArr = item.category.filter((myitem) => {
                return myitem === "hc";
              });

              return firstArr[0] === "hc";
            });
            setarr(newArr);
          }}
          className={currentActive === "hc" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setcurrentActive("react");
            const newArr = projects.filter((item) => {
              const firstArr = item.category.filter((myitem) => {
                return myitem === "react";
              });

              return firstArr[0] === "react";
            });
            setarr(newArr);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setcurrentActive("ASP");
            const newArr = projects.filter((item) => {
              const firstArr = item.category.filter((myitem) => {
                return myitem === "ASP";
              });

              return firstArr[0] === "ASP";
            });
            setarr(newArr);
          }}
          className={currentActive === "ASP" ? "active" : null}
        >
          ASP.NET
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type: "spring",damping:17,stiffness:50}}
                key={item.img}
                className="card"
              >
                <img className="img" width={400} src={item.img} />
                <div style={{ width: "400px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam eum aut esse dolor. Officia sit delectus incidunt
                    voluptate deleniti nemo dolorem voluptatum, saepe,
                    reiciendis architecto consectetur suscipit facere,
                    consequuntur ea!
                  </p>
                  <div className="flex icons">
                    <div className="icon-github"></div>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow_forward"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
