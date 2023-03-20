import React from "react";
import Button from "../../components/Buttons/Button";
import Styles from "./header.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import joaquin from "../../assets/Joaquin_Carrera.png";
import { CiImport } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Header = () => {
  return (
    <div className={Styles.container_header} id="header">
      <header className={Styles.header}>
        <h2>
          <span className={Styles.color_font}>JOAQUIN</span>
          <br />
          CARRERA
        </h2>
        <Button about="Trabaja conmigo" />
      </header>
      <main className={Styles.main}>
        <picture className={Styles.container_img}>
          <img src={joaquin} alt="Joaquin Carrera" />
        </picture>
        <article className={Styles.fullname}>
          <motion.h1
            variants={fadeIn("up", .2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            JOAQUIN CARRERA
          </motion.h1>
          <div className={Styles.container_about}>
            <h2>SOY UN</h2>
            <ul className={Styles.dinamic}>
              <li>
                <span>FULL STACK DEVELOPER</span>
              </li>
              <li>
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
        </article>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, illo
          dicta ab facilis reiciendis ex nemo neque veritatis, mollitia
          pariatur, asperiores officia! Magni repudiandae quod ducimus, sit
          exercitationem nisi esse.
        </p>
        <div className={Styles.container_buttons}>
          <Button
            about={"Contactame"}
            download={<CiImport className={Styles.download} />}
          ></Button>
        </div>
        <div className={Styles.container_icons}>
          <a href="https://github.com/Joaqoo555" target="_blank">
            {" "}
            <BsGithub className={Styles.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/joaquin-ezequiel-carrera/"
            target="_blank"
          >
            <BsLinkedin className={Styles.icons} />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Header;
