import React from "react";
import Styles from "./nav.module.css";

import { BiUser } from "react-icons/bi";
import { GrHomeRounded, GrTechnology } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-scroll";

import { color } from "framer-motion";
const Nav = () => {
  return (
    <section className={Styles.nav_container}>
      <article className={Styles.container_icons}>
        <Link to="header" spy={true} smooth={"easeInOutQuart"} activeClass={Styles.active} isDynamic={true}>
          <GrHomeRounded className={Styles.icons} />
        </Link>
      </article>{" "}
      <article className={Styles.container_icons}>
        <Link
        isDynamic={true}
          to="technologies"
          spy={true}
          smooth={"easeInOutQuart"}

          activeClass={Styles.active}

        >
          <GrTechnology className={Styles.icons} />
        </Link>
      </article>
      <article className={Styles.container_icons}>
        <Link
        isDynamic={true}
          to="proyects"
          spy={true}
          smooth={"easeInOutQuart"}
          activeClass={Styles.active}
        >
          <BiUser className={Styles.icons} />
        </Link>
      </article>
      <article className={Styles.container_icons}>
        <Link to="contact" spy={true} isDynamic={true} smooth={"easeInOutQuart"} activeClass={Styles.active}>
          <FaRegCommentDots className={Styles.icons} />
        </Link>
      </article>
    </section>
  );
};

export default Nav;
