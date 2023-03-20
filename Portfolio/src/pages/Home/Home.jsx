import React from "react";
import Nav from "../../layouts/Nav/Nav";
import Styles from "./home.module.css"
import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";
const Home = () => {
  return (
    <div className={Styles.container}>

      <Nav />
      <Header></Header>
      <About></About>
      <div>
        <p>Joaquin Carrera</p>
      </div>
      <div>
        <p>Joaquin Carrera</p>
      </div>
      
    </div>
  );
};

export default Home;
