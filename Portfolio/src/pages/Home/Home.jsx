import React from "react";
import Nav from "../../layouts/Nav/Nav";
import Styles from "./home.module.css"
import Header from "../../layouts/Header/Header";
const Home = () => {
  return (
    <div className={Styles.container}>

      <Nav />
      <Header></Header>
      <div>
        <p>Joaquin Carrera</p>
      </div>
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
