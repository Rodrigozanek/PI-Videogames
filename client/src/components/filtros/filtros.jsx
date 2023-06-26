import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { genresDB, genresFilter, filterCreator, filterAsc, filterDesc } from "../../redux/actions";
import Estilos from "../filtros/filtros.module.css"



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
      return dispatch(filterAsc(e.target.value));
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
    <div className={Estilos.div_conteiner}>
      <div>
        <div className={Estilos.div_filtros}>
        <h2 className={Estilos.nombre_filtro}>Generos</h2>
        </div>
        <select className={Estilos.select_order} onChange={(e) => handleFilter(e)}>
          <option default>Todos</option>
          {genres.map((G) => (
            <option value={G.name}>{G.name}</option>
          ))}
        </select>
      </div>


      <div>
        <div className={Estilos.div_filtros}>
        <h2 className={Estilos.nombre_filtro}>Ordenamiento</h2>
        </div>
        <select className={Estilos.select_order} onChange={(e) => handleOrder(e)}>
          <option value="All" default>Todos</option>
          <option value="asc_name">Alphabetically (A-Z)</option>
          <option value="desc_name">Alphabetically (Z-A)</option>
          <option value="asc_rating">Rating (Lower-Higher)</option>
          <option value="desc_rating">Rating (Higher-Lower)</option>
        </select>
      </div>


      <div>
        <div className={Estilos.div_filtros}>
        <h2 className={Estilos.nombre_filtro}>Filtro Origen</h2>
        </div>
        <select className={Estilos.select_order} onChange={(e) => handleCreator(e)} >
          <option default>Todos</option>
          <option value="Api">API</option>
          <option value="Created">Base de Datos</option>
        </select>
      </div>
    </div>
  );
}

export default Filtros;