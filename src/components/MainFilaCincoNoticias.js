import React, { useState, useEffect } from "react";

import NoticiaPrincipal from "./CardNoticiaPrincipal";
import NoticiasSecundarias from "./CardNoticiaSecundaria";

const MainFilaCincoNoticias = ({ className, categoria, type }) => {
  const [cards, setCards] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/61500a059548541c29b88851/11"
    );
    const listaCards = await data.json();
    const cards = listaCards.noticiasSecciones;
    setCards(cards);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  const cardPrincipal = cards.filter(
    (cards) => cards.categoria === categoria && cards.type !== type
  );

  const cardsFiltradas = cards.filter(
    (cards) => cards.categoria === categoria && cards.type === type
  );

  return cards.length !== 0 ? (
    <section className="container">
      <div className={className}>
        <h2 className="reset text-light">{categoria}</h2>
        {cardPrincipal.map((card) => {
          return (
            <NoticiaPrincipal
              key={card.id}
              img={card.image}
              titulo={card.titulo}
              info={card.info}
              fecha={card.fecha}
            />
          );
        })}
        <div className="col-lg-8 col-md-12">
          <div className="row reset g-0 d-flex justify-content-between noticia__col__2">
            {cardsFiltradas.map((card) => {
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
