import React from 'react'
import Styles from "./technologie.module.css"

const Technologie = ({name, image, id}) => {

    return (
    <div className={Styles.tech} key={id}>
        <div className={Styles.img}>
        {image}
        </div>
        <p className={Styles.p}>{name}</p>
    </div>
  )
}

export default Technologie