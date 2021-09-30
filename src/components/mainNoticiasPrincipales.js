import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// JSON: https://api.jsonbin.io/b/614e41a6aa02be1d444e2f4a

// Imagenes

import NoticiaCero from "../img/home/main/noticia0.webp";
import NoticiaCuatro from "../img/home/main/noticia4.jpg";
import NoticiaCinco from "../img/home/main/noticia5.jpg";

// Iconos

import User from "../img/iconos/user.svg";
import Clock from "../img/iconos/clock.svg";

const MainNoticiasPrincipales = () => {
  const [noticias, setNoticias] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/614e41a6aa02be1d444e2f4a/3"
    );
    const listaNoticias = await data.json();
    const noticias = listaNoticias.noticiasPrincipales;

    setNoticias(noticias);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  return noticias.length !== 0 ? (
    <section className="container-lg">
      <div className="row">
        {/* <Link to={`/singlePost/${noticias[0].id}`} className="col-lg-7"> */}
        <Link to={`/singlePost/${noticias[0].id}`} className="col-lg-7">
        
          <div className="position-relative noticia-background h-100">
            <img src={NoticiaCero} alt="" className="w-100 h-100" />
            <div className="position-absolute bottom-0 noticia-content">
              <div className="tag-title-container">
                <div className="tag tag-pink">
                  <p>{noticias[0].categoria}</p>
                </div>
                <h2 className="mb-1">{noticias[0].titulo}</h2>
                <p className="mb-2 mas-info">{noticias[0].info}</p>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={User} alt="" className="pe-2" />
                  <p>{noticias[0].autor}</p>
                </div>
                <div className="d-flex align-items-center ms-3">
                  <img src={Clock} alt="" className="pe-2" />
                  <p>{noticias[0].fecha}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="col-lg-5">
          <div className="row">
            <Link to={`/singlePost/${noticias[1].id}`} className="col-lg-12 mb-lg-3 my-lg-0 my-3">
              <div className="position-relative noticia-background">
                <img src={NoticiaCuatro} alt="" className="img-fluid" />
                <div className="position-absolute bottom-0 noticia-content">
                  <div className="tag-title-container-sec">
                    <div className="tag tag-yellow">
                      <p>{noticias[1].categoria}</p>
                    </div>
                    <h2 className="mb-1">{noticias[1].titulo}</h2>
                    <p className="mb-2 mas-info">{noticias[1].info}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <img src={User} alt="" className="pe-2" />
                      <p>{noticias[1].autor}</p>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                      <img src={Clock} alt="" className="pe-2" />
                      <p>{noticias[1].fecha}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/singlePost/${noticias[2].id}`} className="col-lg-12">
              <div className="position-relative noticia-background">
                <img src={NoticiaCinco} alt="" className="img-fluid" />
                <div className="position-absolute bottom-0 noticia-content">
                  <div className="tag-title-container-sec">
                    <div className="tag tag-teal">
                      <p>{noticias[2].categoria}</p>
                    </div>
                    <h2 className="mb-1">{noticias[2].titulo}</h2>
                    <p className="mb-2 mas-info">{noticias[2].info}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <img src={User} alt="" className="pe-2" />
                      <p>{noticias[2].autor}</p>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                      <img src={Clock} alt="" className="pe-2" />
                      <p>{noticias[2].fecha}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
