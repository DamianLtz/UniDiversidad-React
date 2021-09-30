import React from "react";
import { Link } from "react-router-dom";

// https://api.jsonbin.io/b/61500a059548541c29b88851

import Clock from "../img/iconos/clock_dark.svg";

const CardSecundariaSeccionesAlt = ({ titulo, fecha, image, autor, id }) => {
  return (
    <Link
      to={`/singlePost/${id}`}
      className="col-lg-4 col-md-12 col-sm-12 noticia__col__1 g-0"
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

export default CardSecundariaSeccionesAlt;
