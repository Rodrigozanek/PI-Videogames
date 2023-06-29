import { ALL_GAMES, SEARCH_NAME, ID_GAME, POST_GAME, ALL_GENRES, RESET, FILTER_GENRES, ASC_RATING_ORDER, DESC_RATING_ORDER, FILTER_CREATOR } from "../actions/actionsTypes";

let initialState = { 
    allGames:[],
    gamesCopy:[],
    game: [],
    genres: [],
    filteredVideogames: [],
    orderBy: "Select",
    filterBy: "All",
}

function reducer (state = initialState, {type, payload}){
    switch (type) {
        case ALL_GAMES:
            return{
                ...state,
                allGames: payload,
                gamesCopy: payload
            }
        case SEARCH_NAME:
            return{
                ...state,
                allGames: payload
            }
        case ID_GAME:
            return{
                ...state,
                game: payload
            }

        case POST_GAME:
            return{
                ...state
            }
        case ALL_GENRES:
            return{
                ...state,
                genres: payload
            }
//----------------------------FILTROS--------------------------
case RESET:
    return {
        ...state,
        allGames: [],
        filteredVideogames: [],
        orderBy: "Select",
        filterBy: "All",
    }
    case FILTER_GENRES:
        return {
          ...state,
          filteredVideogames: payload.videogameGenre,
          filterBy: payload.genres,
        };




  // posible falla
      case ASC_RATING_ORDER:
      case DESC_RATING_ORDER:
        return {
          ...state,
          filteredVideogames: payload.videogamesOrder,
          orderBy: payload.name,
        };
  //-----------------------------------------------------




      case FILTER_CREATOR:
      return {
        ...state,
        filteredVideogames: payload.allGames,
        filterBy: payload.source,
        };

        default:
            return {...state};
    }
};

export default reducer