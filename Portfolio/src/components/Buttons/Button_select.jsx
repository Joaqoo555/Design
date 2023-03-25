import Styles from "./button_select.module.css";
import React from 'react';

const Button_select = ({about, onClick}) => {
  return (
    <button className={Styles.style_button_select} onClick={onClick}>
       {about}
    </button>
  )
}

export default Button_select