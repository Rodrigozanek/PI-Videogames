import { ALL_GAMES, SEARCH_NAME, ID_GAME } from "../actions/actionsTypes";

let initialState = {allGames:[], gamesCopy:[], game: []}

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

        default:
            return {...state};
    }
};

export default reducer