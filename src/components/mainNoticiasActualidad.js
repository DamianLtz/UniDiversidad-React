import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Iconos

import Clock from "../img/iconos/clock_dark.svg";

const MainNoticiasActualidad = () => {
  const [noticias, setNoticias] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/61500a059548541c29b88851/11"
    );
    const listaNoticias = await data.json();
    const noticias = listaNoticias.noticiasSecciones;
    setNoticias(noticias);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  return noticias.length !== 0 ? (
    <>
      <section className="container">
        <div className="row container-props container-actualidad-bg mx-1 mx-lg-0 mb-4">
          <h1 className="text-light px-0 px-lg-4 pb-4">Actualidad</h1>
          <Link
            to={`/singlePost/${noticias[0].id}`}
            className="col-lg-7 px-0 px-lg-4"
          >
            <img
              src={noticias[0].image}
              alt=""
              className="img-fluid img-princ-border w-100"
            />
            <div className="container-texto-noticia-princ bg-light">
              <h2>{noticias[0].titulo}</h2>
              <p className="my-3">{noticias[0].info}</p>
              <div className="d-flex align-items-center">
                <img src={Clock} alt="" className="pe-2" />
                <p>{noticias[0].fecha}</p>
              </div>
            </div>
          </Link>
          <div className="col-lg-5 gy-4 gy-lg-0 d-flex flex-column justify-content-between">
            <Link to={`/singlePost/${noticias[1].id}`} className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 px-0 pe-0">
                <img
                  src={noticias[1].image}
                  alt=""
                  className="img-fluid img-sec-border w-100"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 px-0 ps-lg-0">
                <div className="container-texto-noticia-sec bg-light">
                  <h3>{noticias[1].titulo}</h3>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Clock} alt="" className="pe-2" />
                    <p>{noticias[1].fecha}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={`/singlePost/${noticias[2].id}`}
              className="row my-4 my-lg-0"
            >
              <div className="col-lg-6 col-md-6 col-sm-12 px-0 pe-0">
                <img
                  src={noticias[2].image}
                  alt=""
                  className="img-fluid img-sec-border w-100"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 px-0 ps-lg-0">
                <div className="container-texto-noticia-sec bg-light">
                  <h3>{noticias[2].titulo}</h3>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Clock} alt="" className="pe-2" />
                    <p>{noticias[2].fecha}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/singlePost/${noticias[3].id}`} className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 px-0 pe-0">
                <img
                  src={noticias[3].image}
                  alt=""
                  className="img-fluid img-sec-border w-100"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 px-0 ps-lg-0">
                <div className="container-texto-noticia-sec bg-light">
                  <h3>{noticias[3].titulo}</h3>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Clock} alt="" className="pe-2" />
                    <p>{noticias[3].fecha}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="container-lg button__link__box">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a href="/" className="button__link seccion__noticias__bg__1">
                  Señal U
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a
                  href="#/"
                  className="button__link my-3 my-md-0 seccion__noticias__bg__2"
                >
                  Radio U
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 my-3 my-lg-0">
                <a href="#/" className="button__link container-podcast__bg">
                  Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="container-props container-podcast__bg">
              <h1 className="reset text-light">Podcast</h1>
              <div className="d-flex flex-column justify-content-around">
                <iframe
                  src="https://open.spotify.com/embed/track/2jB9QaPJyVdz2Q0Va8rrnU"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="1"
                  className="mt-4"
                ></iframe>
                <iframe
                  src="https://open.spotify.com/embed/track/0mV43B6pJWRjcM5TmzNe6d"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="2"
                  className="my-4"
                ></iframe>
                <iframe
                  src="https://open.spotify.com/embed/track/6qI0MU175Dk2DeoUjlrOpy"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="3"
                  className="mb-4"
                ></iframe>
                <iframe
                  src="https://open.spotify.com/embed/track/4rPkN1FMzQyFNP9cLUGIIB"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="4"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="container-props container-mojo__bg h-100">
              <h1 className="text-light pb-4">Mojo</h1>
              <Link
                to={`/singlePost/${noticias[4].id}`}
                className="row px-3 mb-4"
              >
                <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                  <img
                    src={noticias[4].image}
                    className="img-fluid w-100 img-sec-border"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                  <div className="container-texto-noticia-sec bg-light">
                    <h3>{noticias[4].titulo}</h3>
                    <div className="d-flex align-items-center mt-3">
                      <img src={Clock} alt="" className="pe-2" />
                      <p>{noticias[4].fecha}</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={`/singlePost/${noticias[5].id}`} className="row px-3">
                <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                  <img
                    src={noticias[5].image}
                    className="img-fluid w-100 img-sec-border"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                  <div className="container-texto-noticia-sec bg-light">
                    <h3>{noticias[5].titulo}</h3>
                    <div className="d-flex align-items-center mt-3">
                      <img src={Clock} alt="" className="pe-2" />
                      <p>{noticias[5].fecha}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
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

export default MainNoticiasActualidad;
