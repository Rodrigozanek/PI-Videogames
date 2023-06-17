import { ALL_GAMES } from "./actionsTypes";
import axios from "axios";
const URL = 'https://api.rawg.io/api/games?key='
const API_KEY = 'c935b0e1cb634ca5827bd707a1e3e85b'



export function getGames(){
    return async function(dispatch){
        const response = await axios(URL + API_KEY)
        return dispatch({
            type: ALL_GAMES,
            payload: response.data.results
        })
    }
}