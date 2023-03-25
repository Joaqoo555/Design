import React from "react";
import Nav from "../../layouts/Nav/Nav";
import Styles from "./home.module.css"
import Header from "../../layouts/Header/Header";
import Proyects from "../../layouts/Proyects/Proyects";
import Contact from "../../layouts/Contact/Contact";
import Technologies from "../../layouts/Technologies/Technologies";
const Home = () => {
  return (
    <div className={Styles.container}>
      <Nav />
      <Header></Header>
      <Technologies></Technologies>
      <Proyects></Proyects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
