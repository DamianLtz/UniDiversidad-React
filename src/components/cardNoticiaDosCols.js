import React from "react";
import { Link } from "react-router-dom";

import Clock from "../img/iconos/clock_dark.svg";

const CardNoticiaDosCols = ({ titulo, fecha, image, autor, id, widthCard }) => {
  return (
    <Link
      to={`/singlePost/${id}`}
      className={`col-lg-6 col-md-12 col-sm-12 ${widthCard} g-0`}
    >
      <div>
        <img src={image} alt="" className="img-fluid w-100" />
      </div>
      <p className="reset fsize-20">{autor}</p>
      <h3>{titulo}</h3>
      <div className="fecha__noticia">
        <div>
          <img src={Clock} alt="Fecha" className="pe-3" />
        </div>
        <p>{fecha}</p>
      </div>
    </Link>
  );
};

export default CardNoticiaDosCols;
