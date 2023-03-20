import React from 'react'
import Styles from "./button.module.css"
const Button = ({about, download}) => {
  return (
    <button className={Styles.style_button}>
       {about} {download}
    </button>
  )
}

export default Button