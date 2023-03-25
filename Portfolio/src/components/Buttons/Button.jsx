import React from 'react'
import Styles from "./button.module.css"
const Button = ({about, download, onClick}) => {
  return (
    <button className={Styles.style_button} onClick={onClick}>
       {about} {download}
    </button>
  )
}

export default Button