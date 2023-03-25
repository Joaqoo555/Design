import React from 'react'
import Styles from "./notify.module.css"
import { Toaster, toast } from 'react-hot-toast'
import { BiCopy } from 'react-icons/bi'

const Notify = ({text}) => {

    const notify = () => {
        navigator.clipboard.writeText(text)
        toast('¡Copiado!', {
          icon: '✅',
        });
      }


  return (
    <div className={Styles.container_icon_notify}>
    <p>{text}</p>
      <BiCopy onClick={notify} className={Styles.icon_notify} >
      </BiCopy>
      <Toaster />
    </div>
  )
}

export default Notify