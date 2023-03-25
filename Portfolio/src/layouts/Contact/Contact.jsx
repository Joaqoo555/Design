import React from "react";
import Styles from "./contact.module.css";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BiCopy } from "react-icons/bi";
import Notify from "../../components/Notify/Notify";

const Contact = () => {
  const number = "+54 - 299 - 4187714";
  const gmail = "joaquincarrera.developer@gmail.com";

  return (
    <div id="contact" className={Styles.container_contact}>
      <h2>Contacto</h2>
      <article className={Styles.info}>
        <section className={Styles.maps}>
          <iframe
            className={Styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49651.96786166442!2d-68.1504201136937!3d-38.94116260909734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33ba35eb8e35%3A0x6220acb810e3e2f5!2zTmV1cXXDqW4!5e0!3m2!1ses-419!2sar!4v1679769185591!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>{" "}
        <div className={Styles.container_info_aditional}>
        <section className={Styles.reds}>
          <Notify text={gmail} />
          <Notify text={number} />
        </section>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className={Styles.container_icons}
        >
          <a href="https://github.com/Joaqoo555" target="_blank">
            {" "}
            <BsGithub className={Styles.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/joaquin-ezequiel-carrera/"
            target="_blank"
          >
            <BsLinkedin className={Styles.icons} />
          </a>
          <a
            href="https://wa.me/542994187714"
            target="_blank"
          >
            <BsWhatsapp className={Styles.icons} />
          </a>
        </motion.div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
