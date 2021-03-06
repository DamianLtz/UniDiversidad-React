import React from "react";

import MainNoticiasPrincipales from "./mainNoticiasPrincipales";
import MainCovid from "./mainCovid";
import RedesSociales from "./mainRedesSociales";
import NoticiasActualidad from "./mainNoticiasActualidad";
import MainNoticiasSecciones from "./MainFilaCincoNoticias";
import MainNoticiasSeccionesDos from "./MainFilaTresNoticias";
import BotonesLinks from "./mainBotonesLinks";
import ArticulosNoticias from "./mainArticulosNoticias";
import MainBanners from "./mainBanners";
import MainNoticiasDosCols from "./mainNoticiasDosCols";

const mainHome = () => {
  return (
    <main className="main-uni">
      <MainNoticiasPrincipales />
      <MainCovid />
      <RedesSociales />
      <NoticiasActualidad />
      <MainBanners />
      <MainNoticiasSecciones className="row seccion__noticias g-0 seccion__noticias__bg__1" categoria="Sociedad" />
      <MainNoticiasSeccionesDos className="row reset seccion__noticias__2 seccion__noticias__bg__6 g-0" categoria="Medio Ambiente"/>
      <MainNoticiasSeccionesDos className="row reset seccion__noticias__2 seccion__noticias__bg__3 g-0" categoria="Ciencia y Tecnologia" />
      <MainBanners />
      <ArticulosNoticias />
      <MainNoticiasSeccionesDos className="row reset seccion__noticias__2 seccion__noticias__bg__4 g-0" categoria="Sala de Escape"/>
      <BotonesLinks />
      <MainNoticiasDosCols className="row reset seccion__noticias__2 seccion__noticias__bg__2 g-0" categoria="Otras Miradas"/>
      <MainNoticiasSeccionesDos className="row reset seccion__noticias__2 seccion__noticias__bg__1 g-0" categoria="Deportes"/>
    </main>
  );
};

export default mainHome;
