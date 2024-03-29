import React from "react";
import Button from "../../components/Buttons/Button";
import Styles from "./header.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import joaquin from "../../assets/Joaquin_Carrera.png";
import { CiImport } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Header = () => {
  const onRedirectToMyWpp = () => {
    //redirect to my wpp when click the button
    window.location.href = "https://wa.me/542994187714";
  }

  return (
    <div className={Styles.container_header} id="header">
      <header className={Styles.header}>
        <h2>
          <span className={Styles.color_font}>
            JO
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={Styles.letter_a}
            >
              A
            </motion.div>
            QUIN
          </span>
          <br />
          <span className={Styles.surname}>
            CA
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={Styles.letter_a}
            >
              R
            </motion.div>
            RERA
          </span>
        </h2>
        <Button about="Trabaja conmigo" onClick={onRedirectToMyWpp}/>
      </header>
      <main className={Styles.main}>
        <motion.picture
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className={Styles.container_img}
        >
          <img src={joaquin} alt="Joaquin Carrera" />
        </motion.picture>
        <motion.article
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className={Styles.fullname}
        >
          <h1>JOAQUIN CARRERA</h1>
          <div className={Styles.container_about}>
            <ul className={Styles.dinamic}>
              <li className={Styles.full_stack}>
                <span>FULL STACK DEVELOPER</span>
              </li>
              <li className={Styles.web_dev}>
                <span>WEB DEVELOPER</span>
              </li>
              <li className={Styles.mern}>
                <span>MERN DEVELOPER</span>
              </li>
              <li className={Styles.simple}>
                <span>SIMPLE GUY</span>
              </li>
            </ul>
          </div>
          <p>
            Soy desarrollador Full stack M.E.R.N, con experiencia
            trabajando en Typescript, Javascript, React.JS, Express.JS, Node.JS,
            Tailwind, SQL entre otras tecnologías para la industria E-commerce.
            Busco crecer en el ámbito del desarrollo de software, aportando
            liderazgo, trabajo en equipo, Proactividad y Resolución de
            problemas.
          </p>
          <div className={Styles.container_acounts}>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className={Styles.container_buttons}
            >
    
            </motion.div>

          </div>
        </motion.article>
      </main>
    </div>
  );
};

export default Header;
