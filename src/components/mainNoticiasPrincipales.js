import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import listaNoticias from "./API/ListaNoticias";

// Iconos
import User from "../img/iconos/user.svg";
import Clock from "../img/iconos/clock.svg";

const MainNoticiasPrincipales = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(listaNoticias);
  }, []);

  const noticiaDestacada = noticias.find((noticias) => "Destacada" === noticias.type);
  const noticiaDestacadaAlt = noticias.filter((noticias) => "DestacadaAlt" === noticias.type);

  return noticias.length !== 0 ? (
    <section className="container-lg">
      <div className="row">
        <Link to={`/singlePost/${noticiaDestacada.id}`} className="col-lg-7">
          <div className="position-relative noticia-background h-100">
            <img src={noticiaDestacada.image} alt="" className="w-100 h-100" />
            <div className="position-absolute bottom-0 noticia-content">
              <div className="tag-title-container">
                <div className="tag tag-pink">
                  <p>{noticiaDestacada.categoria}</p>
                </div>
                <h2 className="mb-1">{noticiaDestacada.titulo}</h2>
                <p className="mb-2 mas-info">{noticiaDestacada.info1}</p>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={User} alt="" className="pe-2" />
                  <p>{noticiaDestacada.autor}</p>
                </div>
                <div className="d-flex align-items-center ms-3">
                  <img src={Clock} alt="" className="pe-2" />
                  <p>{noticiaDestacada.fecha}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="col-lg-5">
          <div className="row">
            {noticiaDestacadaAlt.map((noticia) => {
              return (
                <Link key={noticia.id} to={`/singlePost/${noticia.id}`} className="col-lg-12 mb-lg-3 my-lg-0 my-3">
                  <div className="position-relative noticia-background">
                    <img src={noticia.image} alt="" className="img-fluid" />
                    <div className="position-absolute bottom-0 noticia-content">
                      <div className="tag-title-container-sec">
                        <div className={`tag ${noticia.color}`}>
                          <p>{noticia.categoria}</p>
                        </div>
                        <h2 className="mb-1">{noticia.titulo}</h2>
                        <p className="mb-2 mas-info">{noticia.info1}</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <img src={User} alt="" className="pe-2" />
                          <p>{noticia.autor}</p>
                        </div>
                        <div className="d-flex align-items-center ms-3">
                          <img src={Clock} alt="" className="pe-2" />
                          <p>{noticia.fecha}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="container-lg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default MainNoticiasPrincipales;
