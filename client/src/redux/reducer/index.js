import { ALL_GAMES } from "../actions/actionsTypes";

let initialState = {allGames:[]}

function reducer (state = initialState, {type, payload}){
    switch (type) {
        case ALL_GAMES:
            return{
                ...state,
                allGames: payload
            }


        default:
            return {...state};
    }
};

export default reducer