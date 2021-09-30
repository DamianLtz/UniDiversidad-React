import React from "react";

import CuadroUno from "../img/home/main/cuadro_1.jpg"
import CuadroDos from "../img/home/main/cuadro_2.gif"
import CuadroTres from "../img/home/main/cuadro_3.jpg"
import CuadroCuatro from "../img/home/main/cuadro_4.jpg"

const mainBanners = () => {
  return (
    <section className="container">
      <div className="row">
        <a href="#/" className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={CuadroUno} alt="" className="img-fluid w-100" />
        </a>
        <a href="#/" className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={CuadroDos} alt="" className="img-fluid w-100" />
        </a>
        <a href="#/" className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={CuadroTres} alt="" className="img-fluid w-100" />
        </a>
        <a href="#/" className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={CuadroCuatro} alt="" className="img-fluid w-100" />
        </a>
      </div>
    </section>
  );
};

export default mainBanners;
