import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import listaNoticias from "../components/API/ListaNoticias";
import IconoTwitter from "../img/singlepost/main/twitter.svg";
import IconoWpp from "../img/singlepost/main/whatsapp.svg";
import IconoFb from "../img/singlepost/main/facebook.svg";
import IconoMail from "../img/singlepost/main/mail.svg";
import ArticulosNoticias from "../components/ArticulosNoticias";
import MainBanners from "../components/mainBanners";

const SinglePost = () => {
  const { id } = useParams();
  const idNoticia = parseInt(id);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(listaNoticias);
  }, []);

  const post = posts.find((posts) => idNoticia === posts.id);
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
      <p className="mb-3 fs-5 fst-italic text-center text-lg-start">
        {post.comentario}
      </p>
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
      {post.IconoMailinfo1 ? (
        <p className={`pt-3 ${post.info2 ? "pb-2" : "pb-5"} fs-5`}>
          {post.info1}
        </p>
      ) : null}
      {post.info2 ? (
        <p className={`pt-3 ${post.info3 ? "pb-2" : "pb-5"} fs-5`}>
          {post.info2}
        </p>
      ) : null}
      {post.info3 ? (
        <p className={`pt-3 ${post.info4 ? "pb-2" : "pb-5"} fs-5`}>
          {post.info3}
        </p>
      ) : null}
      {post.info4 ? (
        <p className={`pt-3 ${post.info5 ? "pb-2" : "pb-5"} fs-5`}>
          {post.info4}
        </p>
      ) : null}
      {post.info5 ? <p className="pt-3 pb-5 fs-5">{post.info5}</p> : null}
      <div className={`etiquetas ${!post.info1 ? "pt-3" : ""}`}>
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
