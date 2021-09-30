import React from "react";

import UniLogo from "../img/home/footer/Uni_logo_footer.svg"

const footer = () => {
  return (
    <footer className="footer__background__pink">
        <div className="container footer__container">
            <div className="col-lg-3 col-md-12 col-sm-12 footer__col__1">
                <div>
                    <img src={UniLogo} alt="" className="footer__logo" />
                </div>
                <div className="footer__logo__titulo">
                    <p className="reset">
                        Unidiversidad
                    </p>
                    <p className="reset">
                        El sistema de medios de la UNCUYO
                    </p>
                </div>
                <div className="footer__redessociales">
                    <a href="#/">
                        <img src="img/Footer/Instagram.svg" alt="" />
                    </a>
                    <a href="#/">
                        <img src="img/Footer/Facebook.svg" alt="" />
                    </a>
                    <a href="#/">
                        <img src="img/Footer/Twitter.svg" alt="" />
                    </a>
                    <a href="#/">
                        <img src="img/Footer/Youtube.svg" alt="" />
                    </a>
                    <a href="#/">
                        <img src="img/Footer/Rss.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="col-lg-9 footer__links">
                <div className="row reset d-flex justify-content-evenly g-0">
                    <ul className="ul-reset col-lg-4 footer__ul__1">
                        <li className="li-reset">
                            <a href="#/">
                                Señal U
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Radio U
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Radio Abierta
                            </a>
                        </li>
                    </ul>
                    <ul className="ul-reset col-lg-4 footer__ul__1">
                        <li className="li-reset">
                            <a href="#/">
                                U Academico
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                U Deportivo
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Edicion U
                            </a>
                        </li>
                    </ul>
                    <ul className="ul-reset col-lg-4 footer__ul__1">
                        <li className="li-reset">
                            <a href="#/">
                                Noticias UNCUYO
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="row reset d-flex justify-content-evenly g-0 mt-4">
                    <ul className="ul-reset col-lg-4 footer__ul__2">
                        <li className="li-reset">
                            <a href="#/">
                                Editorial
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Quienes Somos
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Privacidad
                            </a>
                        </li>
                    </ul>
                    <ul className="ul-reset col-lg-4 footer__ul__2">
                        <li className="li-reset">
                            <a href="#/">
                                Grafica
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Contacto
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Solicitud de visita
                            </a>
                        </li>
                    </ul>
                    <ul className="ul-reset col-lg-4 footer__ul__2">
                        <li className="li-reset">
                            <a href="#/">
                                Clasificados Educacionales
                            </a>
                        </li>
                        <li className="li-reset">
                            <a href="#/">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="reset">
                Copyright 2021 Damian/Unidiversidad. Todos los derechos reservados
            </p>
            <p className="reset">
                2021-04-19 18:08:54
            </p>
        </div>
    </footer>
  )
};

export default footer;
