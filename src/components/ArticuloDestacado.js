import React from "react";

import User from "../img/iconos/user.svg";
import Clock from "../img/iconos/clock.svg";
import noticiaArticuloDestacado from "../img/home/seccion__4__noticias/noticia__destacada__2.png";

const ArticuloDestacado = () => {
  return (
    <div className="row">
      <a href="#/" className="col-lg-12 card-container">
        <div className="position-relative card-background h-100">
          <img src={noticiaArticuloDestacado} alt="" className="w-100 h-100" />
          <div className="informe">
            <h3>
              Informe Especial
              <br />
              24 de marzo: mujeres y memoria.
            </h3>
          </div>
          <div className="detalles-informe">
            <h2 className="text-light mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="text-light mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              sequi rem eum delectus alias aut eius asperiores sed, fuga soluta!
              Nam dolorum in ullam. Eaque harum explicabo ullam voluptatem
              corporis dolorem reprehenderit id hic qui!
            </p>
            <div className="d-flex">
              <div>
                <img src={User} alt="Autor" className="pe-3" />
              </div>
              <p className="text-light">Eduardo Rodriguez</p>
              <div>
                <img src={Clock} alt="Fecha" className="px-3" />
              </div>
              <p className="text-light">12 de Abril de 2020</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArticuloDestacado;
