import React from "react";
import Estilos from "../paginado/paginado.module.css"


export const Paginado = ({ videogamesPerPage, totalVideogames, pagina }) => {
  const pageNumbers = [];
                    //Math.ceil redonde hacia arriba el numero mas cercano 6.1 = 7
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)//representa el número total de páginas necesarias para mostrar todos los videojuegos

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

return (
  <nav className={Estilos.pag}>
      {pageNumbers.map((num) => (
        <div key={num}>
          <button className={Estilos.botones_paginas} onClick={(e) => pagina(e, num)}>{num}</button>
        </div>
      ))}
  </nav>
);
};