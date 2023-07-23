import {ADD_FAV,REMOVE_FAV} from './actionsTypes';

export const addFav = (per) =>{
    return{
        type:ADD_FAV,
        payload:per
    }
}

export const removeFav = (id) =>{
    return{
        type:REMOVE_FAV,
        payload: id,
    }

}