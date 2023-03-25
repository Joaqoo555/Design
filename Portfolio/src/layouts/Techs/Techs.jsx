import React, { useEffect, useState } from "react";
import Styles from "./techs.module.css";
import Technologie from "../../components/technologie/Technologie";


import { SwitchTransition, CSSTransition } from "react-transition-group";

import Button_select from "../../components/Buttons/Button_select";




const Techs = ({about, techs}) => {
  
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(false)
  }, [])
  return (
    <article className={Styles.container_about}>
     
      <Button_select
        onClick={() => {
          setOpen((v) => !v);
        }}
        about={about}
      />


      <CSSTransition
        classNames={"techs"}
        in={open}
        timeout={400}
      >
        <section className={Styles.container_techs}>
          {techs.map((t, id) => (
            <Technologie name={t.name} image={t.image} key={id} />
          ))}
        </section>
      </CSSTransition>
      <div className={Styles.container}></div>
    </article>
  );
};

export default Techs;
