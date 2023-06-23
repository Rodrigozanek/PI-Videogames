import { ALL_GAMES, SEARCH_NAME, ID_GAME, POST_GAME, ALL_GENRES } from "./actionsTypes";
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

export function post (data){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/videogames', data)
        return dispatch({
            type: POST_GAME,
            payload: response
        })
    }
}

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

