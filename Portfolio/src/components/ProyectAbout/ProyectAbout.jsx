import React from 'react'
import Styles from "./proyectAbout.module.css"
import unbardo from "../../assets/unbardo.png"
import Button_redirect from '../Buttons/Button_redirect'
const ProyectAbout = ({tittle, img}) => {
  return (
    <div className={Styles.container_about_proyect} >

       <div className={Styles.container_img}>
        <img src={unbardo} alt="Unbardo Design" className={Styles.img}/>
        <div className={Styles.hover_info}>
       <Button_redirect text={"Unbardo Design"} url={"https://un-bardo-design-neon.vercel.app/"}/>
        </div>
        </div>

    </div>
  )
}

export default ProyectAbout
