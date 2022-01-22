import React, { useState, useEffect } from "react";
import listaNoticias from "./API/ListaNoticias";

import ArticuloDestacado from "./ArticuloDestacado";
import ArticulosNoticias from "./ArticulosNoticias";

//https://api.jsonbin.io/b/6152250caa02be1d444fd9dd

const CardsNoticias = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(listaNoticias)
  }, []);

  const cardDestacada = cards.filter((cards) => cards.id === 27);
  const cardsNoticias = cards.filter((cards) => cards.id >= 28 && cards.type === "Card");
  console.log(cardsNoticias)

  return cards.length !== 0 ? (
    <section className="container my-5">
      {cardDestacada.map((card) => {
        return <ArticuloDestacado
          key={card.id}
          id={card.id}
          image={card.image}
          autor={card.autor}
          tituloCuadroUno={card.tituloCuadroUno}
          tituloCuadroDos={card.tituloCuadroDos}
          titulo={card.titulo}
          subtitulo={card.subtitulo}
          fecha={card.fecha} />;
      })}
      <div className="row">
        {cardsNoticias.map((card) => {
          return (
            <ArticulosNoticias
              key={card.id}
              id={card.id}
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
