import {ADD_FAV,REMOVE_FAV,GET_CHARACTER_DETAIL,CLEAN_DETAIL} from './actionsTypes';
import axios from 'axios';

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

export const getCharacterDetail= (id)=>{
    return (dispatch)=>{
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) dispatch({type:GET_CHARACTER_DETAIL,payload:data})
        })

    }
}

export const cleanDetail=()=>{
    return {
        type:CLEAN_DETAIL
    }
}