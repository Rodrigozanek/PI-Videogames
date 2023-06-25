import { ALL_GAMES, SEARCH_NAME, ID_GAME, POST_GAME, ALL_GENRES, RESET, FILTER_GENRES, ASC_RATING_ORDER, DESC_RATING_ORDER, FILTER_CREATOR} from "./actionsTypes";
import axios from "axios";



//100 cartas iniciales
export function getGames(){
    return async function(dispatch){
        const response = await axios('http://localhost:3001/videogames')
        return dispatch({
            type: ALL_GAMES,
            payload: response.data
        })
    }
}
//busqueda por nombre
export function searchGame(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/name?name=${name}`)
        return dispatch({
            type: SEARCH_NAME,
            payload: response.data
        })
    }
}

//detalle de los juegos
export function idGame(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: ID_GAME,
            payload: response.data
        })
    }
}

//post de un juego
export function createGame (data){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/videogames', data)
        return dispatch({
            type: POST_GAME,
            payload: response
        })
    }
}

//todos los generos de los juegos
export function genresDB (){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/genres')
        console.log(response);
        return dispatch({
            type: ALL_GENRES,
            payload: response.data
        })
    
    }
}






/*---------------------------FILTROS-------------------------------------- */
export const resetGames = ( ALL_GAMES) => {
    return (dispatch) => {
        if( ALL_GAMES){
            return dispatch({type: RESET,  });
        }
      
    };
  };

  //*
  export const genresFilter = (genres) => (dispatch, getState) => {
    let filteredGames = [];
  
    if (genres === "All") {
      filteredGames = getState().allGames;
    } else {
      filteredGames = getState().allGames.filter((game) =>
        (game.genres).includes(genres)
      )
    };
    dispatch({
      type: FILTER_GENRES,
      payload: {
        genres,
        videogameGenre: filteredGames,
      },
    });
  };
  
  
  //*
  export const filterAsc = (type) => (dispatch, getState) => {
    const filtered = getState().filteredVideogames;
    let videogamesOrder = []
  
      if (type === "asc_name") {
        videogamesOrder = filtered.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      } else if (type === "asc_rating") {
        videogamesOrder = filtered.sort(
          (a, b) => a.rating - b.rating
        );
      }
      dispatch({
        type: ASC_RATING_ORDER,
        payload: {
          videogamesOrder,
          name: type,
        },
      });
  }
  
  
//*
  export const filterDesc = (type) => (dispatch, getState) => {
    const filtered = getState().filteredVideogames;
    let videogamesOrder = []
      
      if (type === "desc_name") {
        videogamesOrder = filtered.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      } else if (type === "desc_rating") {
        videogamesOrder = filtered.sort(
          (a, b) => b.rating - a.rating
        );
      }
      dispatch({
        type: DESC_RATING_ORDER,
        payload: {
          videogamesOrder,
          name: type,
        },
      });
  }
  
  
  
  export const filterCreator = (source) => (dispatch, getState) => {
    const allGames = getState().allGames.filter(function (G) {
        return G.source === source
      });
    return dispatch({
      type: FILTER_CREATOR,
      payload: {
        allGames,
        source,
      },
    });
  };