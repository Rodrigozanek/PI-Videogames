import { ALL_GAMES, SEARCH_NAME, ID_GAME, POST_GAME, ALL_GENRES } from "../actions/actionsTypes";

let initialState = { allGames:[], gamesCopy:[], game: [], genres: [] }

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

        default:
            return {...state};
    }
};

export default reducer