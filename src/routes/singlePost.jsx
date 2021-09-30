import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import ImgNoticiaRelacionada from "../img/singlepost/main/noticia__relacionada.png";
// import Clock from "../img/iconos/clock_dark.svg";
import IconoTwitter from "../img/singlepost/main/twitter.svg";
import IconoWpp from "../img/singlepost/main/whatsapp.svg";
import IconoFb from "../img/singlepost/main/facebook.svg";
import IconoMail from "../img/singlepost/main/mail.svg";
import ArticulosNoticias from "../components/ArticulosNoticias";
import MainBanners from "../components/mainBanners";

const SinglePost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      `https://api.jsonbin.io/b/6154fb5e9548541c29bafdb0/7`
    );
    const listaPosts = await data.json();
    // const posts = listaPosts.listaNoticias;
    const posts = listaPosts.listaNoticias;
    setPosts(posts);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  const post = posts[id];
  const cardsNoticias = posts.filter(
    (posts) => posts.section === "card" && posts.type === "Secundaria"
  );

  return posts.length !== 0 ? (
    <main className="container container-singlePost main-uni">
      <h1 className="text-start text-lg-center">{post.titulo}</h1>
      <h2>{post.subtitulo}</h2>
      <div className="container-imgPost">
        <img src={post.image} alt="" className="img-fluid w-100 my-4 my-lg-5" />
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <div className="tag tag-pink me-3">
          <p>{post.categoria}</p>
        </div>
        <div className="tag tag-teal me-3">
          <p>Unidiversidad</p>
        </div>
        <p className="fw-bold fs-5 me-3">{post.fuente}</p>
        <p>Publicado el: {post.fecha}</p>
      </div>
      <p className="my-3 fs-5 fst-italic text-center text-lg-start">
        {post.comentario}
      </p>
      <p className="pt-3 pb-5 fs-5">{post.info}</p>
      {/* <div className="row noticia-relacionada d-none d-lg-flex">
        <div className="col-lg-6 col-md-6 col-sm-12 img-noticia pe-0">
          <img
            src={ImgNoticiaRelacionada}
            alt=""
            className="img-fluid w-100 h-100"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 texto-noticia">
          <h3 className="py-3">NOTA RELACIONADA</h3>
          <h4 className="pb-3">Medicos exigen aumento salarial</h4>
          <div className="tag tag-teal">
            <p>Sociedad</p>
          </div>
          <p className="py-2">{post.infoDos}</p>
          <div className="d-flex align-items-center py-2">
            <img src={Clock} alt="Fecha" className="pe-3" />
            <p>12 de Abril de 2020</p>
          </div>
        </div>
      </div> */}
      <div className="etiquetas">
        <a href="#/">Politica</a>
        <a href="#/">Nacional</a>
        <a href="#/">Actualidad</a>
        <a href="#/">Escuelas</a>
        <a href="#/">Covid-19</a>
      </div>
      <div className="contacto__icons">
        <a href="#/">
          <img src={IconoTwitter} alt="" />
        </a>
        <a href="#/">
          <img src={IconoWpp} alt="" />
        </a>
        <a href="#/">
          <img src={IconoFb} alt="" />
        </a>
        <a href="#/">
          <img src={IconoMail} alt="" />
        </a>
      </div>
      <MainBanners />
      <div className="container my-5 titulo-cards-noticias">
        <h2>Sociedad</h2>
        <h2>Rebrote COVID</h2>
        <div className="row">
          {cardsNoticias.map((card) => {
            return (
              <ArticulosNoticias
                key={card.id}
                image={card.image}
                titulo={card.titulo}
                info={card.info}
                fecha={card.fecha}
              />
            );
          })}
        </div>
      </div>
    </main>
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

export default SinglePost;
