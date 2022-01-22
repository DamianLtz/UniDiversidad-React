import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import listaNoticias from "./API/ListaNoticias";

import Clock from "../img/iconos/clock_dark.svg";
import NoticiasSecundarias from "./CardNoticiaSecundaria";

const MainFilaCincoNoticias = ({ className, categoria }) => {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    setNoticias(listaNoticias)
  }, []);

  const noticiaCardDestacada = noticias.find(
    (noticias) => noticias.categoria === categoria && noticias.type === "Principal");

  const noticiasCards = noticias.filter((noticias) => noticias.categoria === categoria && noticias.type === undefined);

  return noticias.length ? (
    <section className="container">
      <div className={className}>
        <h2 className="reset text-light">{categoria}</h2>
        {noticiaCardDestacada ?
          <div className="col-lg-4 col-md-12 noticia__col__1 g-0">
            <Link to={`/singlePost/${noticiaCardDestacada.id}`} href="#/">
              <img src={noticiaCardDestacada.image} alt="" className="img-fluid w-100" />
            </Link>
            <h3>{noticiaCardDestacada.titulo}</h3>
            <p>{noticiaCardDestacada.info1}</p>
            <div className="fecha__noticia">
              <div>
                <img src={Clock} alt="Fecha" className="pe-3" />
              </div>
              <p className="reset">{noticiaCardDestacada.fecha}</p>
            </div>
          </div>
          : null}
        <div className="col-lg-8 col-md-12">
          <div className="row reset g-0 d-flex justify-content-between noticia__col__2">
            {noticiasCards.map((card) => {
              return (
                <NoticiasSecundarias
                  key={card.id}
                  id={card.id}
                  titulo={card.titulo}
                  fecha={card.fecha}
                  img={card.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="container-lg my-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default MainFilaCincoNoticias;
