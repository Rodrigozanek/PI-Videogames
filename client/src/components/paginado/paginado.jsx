import React from "react";
import Estilos from "../paginado/paginado.module.css"


export const Paginado = ({ videogamesPerPage, totalVideogames, pagina }) => {
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={Estilos.pag}>
        {pageNumbers.map((num) => (
          <div key={num}>
            <button onClick={(e) => pagina(e, num)}>
              {num}
            </button>
          </div>
        ))}
    </nav>
  );
};