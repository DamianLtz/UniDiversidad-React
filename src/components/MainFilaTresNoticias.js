import React, { useState, useEffect } from "react";

import NoticiasSecundariasAlt from "./CardNoticiaSecundariaAlt";

const MainFilaTresNoticias = ({ className, categoria, type }) => {
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

  const cardsFiltradas = cards.filter(
    (cards) => cards.categoria === categoria && cards.type === type
  );

  return cards.length !== 0 ? (
    <section className="container">
      <div className={className}>
        <h2 className="reset text-light">{categoria}</h2>
        {cardsFiltradas.map((card) => {
          return (
            <NoticiasSecundariasAlt
              key={card.id}
              id={card.id}
              image={card.image}
              autor={card.autor}
              titulo={card.titulo}
              fecha={card.fecha}
            />
          );
        })}
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

export default MainFilaTresNoticias;
