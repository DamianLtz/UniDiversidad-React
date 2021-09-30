import React from "react";
import { Link } from "react-router-dom";

// https://api.jsonbin.io/b/61500a059548541c29b88851

import Clock from "../img/iconos/clock_dark.svg";

const CardSecundariaSecciones = ({ titulo, fecha, img, id }) => {
  return (
    <Link to={`/singlePost/${id}`} className="col-lg-6 g-0">
      <div>
        <img src={img} alt="" className="img__noticia" />
      </div>
      <div className="texto__noticias">
        <h4>{titulo}</h4>
        <div className="d-flex align-items-center">
          <div>
            <img src={Clock} alt="Fecha" className="pe-3" />
          </div>
          <p>{fecha}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardSecundariaSecciones;
