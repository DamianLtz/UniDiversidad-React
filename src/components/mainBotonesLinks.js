import React from "react";

const botonesLinks = () => {
  return (
    <>
      <section className="container button__link__box">
        <div className="row p-0 m-0">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#/" className="button__link seccion__noticias__bg__1">
              Edicion U
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a
              href="#/"
              className="button__link my-3 my-lg-0 seccion__noticias__bg__2"
            >
              U Academico
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a href="#/" className="button__link container-podcast__bg">
              Radio Abierta
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a
              href="#/"
              className="button__link my-3 my-lg-0 seccion__noticias__bg__5"
            >
              Noticias UNCUYO
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default botonesLinks;
