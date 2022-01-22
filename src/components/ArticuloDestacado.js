import React from "react";
import { Link } from "react-router-dom";
import User from "../img/iconos/user.svg";
import Clock from "../img/iconos/clock.svg";

const ArticuloDestacado = ({ id, titulo, subtitulo , tituloCuadroUno, autor, tituloCuadroDos, info1, info2, info3, info4, info5, image, fecha }) => {
  return (
    <div className="row">
      <Link to={`singlePost/${id}`} className="col-lg-12 card-container">
        <div className="position-relative card-background h-100">
          <img src={image} alt="" className="w-100 h-100" />
          <div className="informe">
            <h3>Informe Especial</h3>
            <h3 className="pt-2">{tituloCuadroDos}</h3>
          </div>
          <div className="detalles-informe">
            <h2 className="text-light pb-4">
              {subtitulo}
            </h2>
            <div className="d-flex">
              <div>
                <img src={User} alt="Autor" className="pe-3" />
              </div>
              <p className="text-light">{autor}</p>
              <div>
                <img src={Clock} alt="Fecha" className="px-3" />
              </div>
              <p className="text-light">{fecha}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticuloDestacado;
