import React from "react";
import { Link } from "react-router-dom";

import UniLogo from "../img/home/navbar/Logo.svg"
import Search from "../img/home/navbar/busqueda.svg"
import Calendar from "../img/home/navbar/calendar.svg"

function fecha(){
  const ObtenerFecha = new Date()
  const fechaActual = `${ObtenerFecha.toDateString()}`
  return fechaActual
}

const header = () => {
  return (
    <header>
      <div className="container-fluid bg-navbar-uni">
        <nav className="container-lg navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="reset navbar-brand" to="/">
              <img
                src={UniLogo}
                alt="Logo Unidiversidad"
                className="logo"
              />
            </Link>
            <button
              className="navbar-toggler p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-mdb-dropdown-animation="on"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="navbar__vh-100">
                <ul className="ul-reset navbar-nav d-lg-none d-md-flex links__nav links__nav__color__1 mt-4">
                  <li className="nav-item">
                    <a
                      className="reset nav-link"
                      aria-current="page"
                      href="señalu.html"
                    >
                      Señal U
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="reset nav-link" href="radiou.html">
                      Radio U
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="reset nav-link" href="radioabierta.html">
                      Radio Abierta
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="reset nav-link" href="uacademico.html">
                      U Academico
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="reset nav-link" href="udeportivo.html">
                      U Deportivo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="reset nav-link" href="edicionu.html">
                      Edicion U
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="reset nav-link" href="SeñalU/programacion.html">
                      Noticias UNCUYO
                    </a>
                  </li>
                </ul>
                <form className="searchbox__home">
                  <div className="fecha__calendario__nav">
                    <img src={Calendar} alt="" />
                    <p className="reset">{fecha()}</p>
                  </div>
                  <div className="buscador__container">
                    <div className="border__color__1 border__buscador">
                      <img
                        src={Search}
                        alt="Buscar"
                        className="ms-2"
                      />
                      <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Buscar"
                        aria-label="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>
        <nav className="container-lg d-none d-lg-block">
          <div className="nav__bg mb-3">
            <ul className="ul-reset navbar-nav ul__desktop links__nav__color__1">
              <li className="nav-item">
                <a
                  className="reset nav-link active"
                  aria-current="page"
                  href="señalu.html"
                >
                  Señal U
                </a>
              </li>
              <li className="nav-item">
                <a className="reset nav-link" href="radiou.html">
                  Radio U
                </a>
              </li>
              <li className="nav-item">
                <a className="reset nav-link" href="radioabierta.html">
                  Radio Abierta
                </a>
              </li>
              <li className="nav-item">
                <a className="reset nav-link" href="uacademico.html">
                  U Academico
                </a>
              </li>
              <li className="nav-item">
                <a className="reset nav-link" href="udeportivo.html">
                  U Deportivo
                </a>
              </li>
              <li className="nav-item">
                <a className="reset nav-link" href="edicionu.html">
                  Edicion U
                </a>
              </li>
              <li className="nav-item">
                <a className="reset nav-link" href="singlepost.html">
                  Noticias UNCUYO
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default header;
