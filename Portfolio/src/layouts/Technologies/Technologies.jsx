import React from "react";
import Techs from "../Techs/Techs";
import Styles from "./techonologies.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  DiJsBadge,
  DiReact,
  DiMongodb,
  DiPostgresql,
  DiWindows,
  DiVisualstudio,
  DiTerminal,
  DiLinux,
  DiDocker,
} from "react-icons/di";

import {
  SiExpress,
  SiTypescript,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiGithub,
  SiGit,
  SiMysql,
  SiSequelize,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
const Technologies = () => {
  const techs = [
    {
      name: "NodeJs",
      image: <SiNodedotjs className={Styles.icon} />,
    },
    {
      name: "JavaScript",
      image: <DiJsBadge className={Styles.icon} />,
    },
    {
      name: "TypeScript",
      image: <SiTypescript className={Styles.icon} />,
    },
    {
      name: "CSS3",
      image: <SiCss3 className={Styles.icon}/>,
    },
    {
      name: "HTML5",
      image: <SiHtml5 className={Styles.icon} />,
    },
  ];
  const frameworks = [
    {
      name: "ExpressJs",
      image: <SiExpress className={Styles.icon} />,
    },
    {
      name: "ReactJs",
      image: <SiReact className={Styles.icon} />,
    },
    {
      name: "TailwindCSS",
      image: <SiTailwindcss className={Styles.icon} />,
    },
  ];
  const databases = [
    {
      name: "PostgreSQL",
      image: <DiPostgresql className={Styles.icon} />,
    },
    {
      name: "MySQL",
      image: <SiMysql className={Styles.icon} />,
    },
    {
      name: "MongoDB",
      image: <DiMongodb className={Styles.icon} />,
    },
    {
      name: "Mongoose",
      image: <DiMongodb className={Styles.icon} />,
    },
    {
      name: "Sequelize",
      image: <SiSequelize className={Styles.icon} />,
    },
  ];
  const others = [
    {
      name: "Linux",
      image: <DiLinux className={Styles.icon} />,
    },
    {
      name: "Windows",
      image: <DiWindows className={Styles.icon} />,
    },
    {
      name: "Github",
      image: <SiGithub className={Styles.icon} />,
    },
    {
      name: "GIT",
      image: <SiGit className={Styles.icon} />,
    },
    {
      name: "Docker",
      image: <DiDocker className={Styles.icon} />,
    },
    {
      name: "VS Code",
      image: <DiVisualstudio className={Styles.icon} />,
    },
  ];
  return (
    
    <motion.div 
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }}
    className={Styles.container_techs} id="technologies">
      <h2>Tecnologias</h2>
        <section className={Styles.techs}>
        <Techs techs={techs} about={"Lenguajes de programacion"} />
      <Techs techs={frameworks} about={"Frameworks - Librerias"} />
      <Techs techs={databases} about={"Bases de Datos"} />
      <Techs techs={others} about={"Otros"} />
        </section>
    </motion.div>
  );
};

export default Technologies;
