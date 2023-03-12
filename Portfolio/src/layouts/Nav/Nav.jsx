import React from "react";
import Styles from "./nav.module.css";

import { BiUser } from "react-icons/bi";
import { GrHomeRounded, GrTechnology } from "react-icons/gr";
import {FaRegCommentDots} from "react-icons/fa"

const Nav = () => {
  return (
    <section className={Styles.nav_container}>
      <article className={Styles.container_icons}>
        <GrHomeRounded className={Styles.icons} />
      </article>
      <article className={Styles.container_icons}>
        <BiUser className={Styles.icons} />
      </article>
      <article className={Styles.container_icons}>
        <GrTechnology className={Styles.icons}/>
      </article>
      <article className={Styles.container_icons}>
        <FaRegCommentDots className={Styles.icons}/>
      </article>
    </section>
  );
};

export default Nav;
