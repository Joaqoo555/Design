import React from "react";
import Styles from "./button_redirect.module.css"
import { BsGithub } from "react-icons/bs";
const Button_redirect = ({ text, url }) => {
  return (
    <div className={Styles.container_button_redirect}>
          <div  className={Styles.style_button}>
            <a href={url} target="_blank" rel={text}>
      <h3>{text}</h3>

    </a>

    </div>
        <a href="https://github.com/Proyect-PF/unBardo_design" target="_blank">
        {" "}
        <BsGithub className={Styles.icons} />
      </a>
    </div>
  );
};

export default Button_redirect;
