import React from "react";

import Instagram from "../img/home/redes/instagram.svg"
import Twitter from "../img/home/redes/twitter.svg"
import Facebook from "../img/home/redes/Facebook.svg"
import Youtube from "../img/home/redes/Youtube.svg"

const redesSociales = () => {
  return (
    <section className="container">
      <h3 className="titulo__redes">Seguinos en nuestras redes</h3>
      <div className="d-flex justify-content-center flex-wrap redes">
        <a href="#/" className="d-flex align-items-center mx-4">
          <img
            src={Instagram}
            alt="Cuenta de Instagram"
            className="img-fluid"
          />
        </a>
        <a href="#/" className="d-flex align-items-center mx-4">
          <img
            src={Twitter}
            alt="Cuenta de Twitter"
            className="img-fluid"
          />
        </a>
        <a href="#/" className="d-flex align-items-center mx-4">
          <img
            src={Facebook}
            alt="Pagina de Facebook"
            className="img-fluid"
          />
        </a>
        <a href="#/" className="d-flex align-items-center mx-4">
          <img
            src={Youtube}
            alt="Canal de Youtube"
            className="img-fluid"
          />
        </a>
      </div>
    </section>
  );
};

export default redesSociales;
