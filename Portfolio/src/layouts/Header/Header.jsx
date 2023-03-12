import React from "react";
import Button from "../../components/Buttons/Button";
import Styles from "./header.module.css";
const Header = () => {
  return (
    <div className={Styles.container_header}>
      <header className={Styles.header}>
        <h2>
          <span className={Styles.color_font}>JOAQUIN</span>
          <br />
          CARRERA
        </h2>
        <Button about="Trabaja conmigo"/>
      </header>
      <main className={Styles.main}>
        <article className={Styles.fullname}>
          <h1>JOAQUIN CARRERA</h1>
          <h2>I AM A DELOPMENT WEB</h2>
        </article>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, illo
          dicta ab facilis reiciendis ex nemo neque veritatis, mollitia
          pariatur, asperiores officia! Magni repudiandae quod ducimus, sit
          exercitationem nisi esse.
        </p>

      </main>
    </div>
  );
};

export default Header;
