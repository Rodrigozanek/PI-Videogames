import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { genresDB, genresFilter, filterCreator, filterAsc, filterDesc } from "../../redux/actions";



export function Filtros({pagina}) {
  const dispatch = useDispatch()
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(genresDB());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  // Filtrado por generos
  const handleFilter = (e) => {
    dispatch(genresFilter(e.target.value))
    pagina(e, 1);
  };


  // Ordenado de forma ascendente o descendente
  const handleOrder = (e) => {
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(filterAsc(e.target.value));
    } else if (e.target.value === "desc_name" || e.target.value === "desc_rating") {
      dispatch(filterDesc(e.target.value));
    } else {
      dispatch(genresFilter(e.target.value));
    }
  };

  // Filtrado por API/Base de Datos
  const handleCreator = (e) => {
    if (e.target.value === "Api" || e.target.value === "Created") {
      dispatch(filterCreator(e.target.value));
      pagina(e, 1);
    } else {
      dispatch(genresFilter(e.target.value));
      pagina(e, 1);
    }
    
  };

  return (
    <div>
      <div>
        <div>Generos</div>
        <select onChange={(e) => handleFilter(e)}>
          <option default>All</option>
          {genres.map((G) => (
            <option value={G.name}>{G.name}</option>
          ))}
        </select>
      </div>
      <div>
        <div>Ordenamiento</div>
        <select onChange={(e) => handleOrder(e)}>
          <option value="All" default>All</option>
          <option value="asc_name">Alphabetically (A-Z)</option>
          <option value="desc_name">Alphabetically (Z-A)</option>
          <option value="asc_rating">Rating (Lower-Higher)</option>
          <option value="desc_rating">Rating (Higher-Lower)</option>
        </select>
      </div>
      <div>
        <div>Filtro de Creacion</div>
        <select onChange={(e) => handleCreator(e)} >
          <option default>All</option>
          <option value="Api">Api videogames</option>
          <option value="Created">User videogames</option>
        </select>
      </div>
    </div>
  );
}

export default Filtros;