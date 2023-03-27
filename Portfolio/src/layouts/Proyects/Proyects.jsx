import React from 'react'
import Styles from "./proyects.module.css"
import ProyectAbout from '../../components/ProyectAbout/ProyectAbout'
import {motion} from "framer-motion"
import {fadeIn} from "../../variants.js"
const Proyects = () => {
  return (
    <div 
    variants={fadeIn("left", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }}
    id='proyects' className={Styles.container_proyects}>
      <h2>Proyectos</h2>
        <ProyectAbout tittle={"Unbardo Design"}></ProyectAbout>
    </div>
  )
}

export default Proyects