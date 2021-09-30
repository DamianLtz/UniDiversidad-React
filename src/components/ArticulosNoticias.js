import React from "react";

import Clock from "../img/iconos/clock_dark.svg";

const CardNoticias = ({image, titulo, info, fecha}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 gy-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{info}</p>
          <div className="d-flex align-items-center mt-2">
            <img src={Clock} alt="Fecha" className="pe-3" />
            <p>{fecha}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNoticias;
