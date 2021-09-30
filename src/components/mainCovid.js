import React from "react";

import Altavoz from "../img/home/iconos/altavoz.svg";
import Mapa from "../img/home/iconos/map.svg";
import CovidIconUno from "../img/home/iconos/covid__1.svg";
import CovidIconDos from "../img/home/iconos/covid__2.svg";

const mainCovid = () => {
  return (
    <section className="container-fluid p-0 background-covid mt-5">
      <div className="container">
        <div className="row reset covid__box">
          <div className="col-lg-2 me-4 covid__icon">
            <div>
              <img src={CovidIconUno} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 gx-lg-3 g-0">
            <a href="#/" className="covid__button">
              <div>
                <img src={Altavoz} alt="" />
              </div>
              Coronavirus: la UNCUYO comunica
            </a>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 gx-lg-3 g-0">
            <a href="#/" className="covid__button">
              <div>
                <img src={Mapa} alt="" />
              </div>
              Mapa del coronavirus
            </a>
          </div>
          <div className="col-lg-2 ms-2 covid__icon">
            <div>
              <img src={CovidIconDos} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default mainCovid;
