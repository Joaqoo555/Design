import React, { useEffect, useRef, useState } from "react";
import Styles from "./techs.module.css";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import Button_select from "../../components/Buttons/Button_select";
import Technologie from "../../components/Technologie/Technologie";




const Techs = ({about, techs}) => {
  
  const [open, setOpen] = useState(true);
  const nodeRef = useRef(null);
  useEffect(()=> {
    setOpen(false)
  },[])
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
        nodeRef={nodeRef}
      >
        <section ref={nodeRef} className={Styles.container_techs}>
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
