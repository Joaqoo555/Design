import React from "react";
import Styles from "./nav.module.css";

import { BiUser } from "react-icons/bi";
import { GrHomeRounded, GrTechnology } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <section className={Styles.nav_container}>
      <article className={Styles.container_icons}>
        <Link to="header" spy={true} smooth={true} >
          <GrHomeRounded className={Styles.icons} />
        </Link>
      </article>
      <article className={Styles.container_icons}>
        <Link to="about" spy={true} smooth={true} >
          <BiUser className={Styles.icons} />
        </Link>
      </article>
      <article className={Styles.container_icons}>
      <Link to="about" spy={true} smooth={true} >
        <GrTechnology className={Styles.icons} />
        </Link>
      </article>
      <article className={Styles.container_icons}>
        <Link to="about" spy={true} smooth={true} >
        <FaRegCommentDots className={Styles.icons} />
        </Link>
      </article>
    </section>
  );
};

export default Nav;
