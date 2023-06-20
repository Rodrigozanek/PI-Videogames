import { ALL_GAMES, SEARCH_NAME, ID_GAME } from "./actionsTypes";
import axios from "axios";




export function getGames(){
    return async function(dispatch){
        const response = await axios('http://localhost:3001/videogames')
        return dispatch({
            type: ALL_GAMES,
            payload: response.data
        })
    }
}

export function searchGame(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/name?name=${name}`)
        return dispatch({
            type: SEARCH_NAME,
            payload: response.data
        })
    }
}

export function idGame(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: ID_GAME,
            payload: response.data
        })
    }
}

