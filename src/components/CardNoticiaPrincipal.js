import React from "react";

import Clock from "../img/iconos/clock_dark.svg";

const mainCardPrincipalSecciones = ({img, titulo, info, fecha}) => {
  return (
    <div className="col-lg-4 col-md-12 noticia__col__1 g-0">
      <a href="#/">
        <img src={img} alt="" className="img-fluid w-100" />
      </a>
      <h3>{titulo}</h3>
      <p>{info}</p>
      <div className="fecha__noticia">
        <div>
          <img src={Clock} alt="Fecha" className="pe-3" />
        </div>
        <p className="reset">{fecha}</p>
      </div>
    </div>
  );
};

export default mainCardPrincipalSecciones;