import React from 'react'
import Styles from "./button.module.css"
const Button = ({about}) => {
  return (
    <button className={Styles.style_button}>
       {about}
    </button>
  )
}

export default Button