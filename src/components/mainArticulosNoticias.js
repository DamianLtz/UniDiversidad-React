import React, { useState, useEffect } from "react";

import ArticuloDestacado from "./ArticuloDestacado";
import ArticulosNoticias from "./ArticulosNoticias";

//https://api.jsonbin.io/b/6152250caa02be1d444fd9dd

const CardsNoticias = ({ type }) => {
  const [cards, setCards] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/6152250caa02be1d444fd9dd/2"
    );
    const listaCards = await data.json();
    const cards = listaCards.noticiasCards;
    setCards(cards);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  const cardDestacada = cards.filter((cards) => cards.type !== type);
  const cardsNoticias = cards.filter((cards) => cards.type === type);

  return cards.length !== 0 ? (
    <section className="container my-5">
      {cardDestacada.map((card) => {
        return <ArticuloDestacado key={card.id} />;
      })}
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

export default CardsNoticias;
