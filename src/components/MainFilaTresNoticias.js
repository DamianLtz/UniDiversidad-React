import React, { useState, useEffect } from "react";
import listaNoticias from "./API/ListaNoticias";
import NoticiasSecundariasAlt from "./CardNoticiaSecundariaAlt";

const MainFilaTresNoticias = ({ className, categoria }) => {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    setNoticias(listaNoticias);
  }, []);

  const noticiasCards = noticias.filter((noticias) => noticias.categoria === categoria && noticias.id !== 3);

  return noticias.length ? (
    <section className="container">
      <div className={className}>
        <h2 className="reset text-light">{categoria}</h2>
        {noticiasCards.map((card) => {
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
