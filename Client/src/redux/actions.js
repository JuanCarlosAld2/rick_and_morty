import {
    ADD_FAV,
    REMOVE_FAV,
    GET_CHARACTER_DETAIL,
    CLEAN_DETAIL,
    FILTER,
    ORDER,
    RESET
} from './actionsTypes';

import axios from "axios"

export const addFav = (character) => { //{id,name,status,species,gender,origin,image,onClose}
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
           // console.log(data);//[{id,name,status,species,gender,origin,image,onClose}]
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

 export const removeFav = (id) => { 
    
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`; //retorna  [{}]
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => { //[{}]
        //console.log(data);
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };
 
export const getCharacterDetail= (id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)//cambiar a https://rickandmortyapi.com/api/character/${id} en caso de fallo 
        .then(response => response.json())
        .then(( data ) => {
            if (data.name) dispatch({type:GET_CHARACTER_DETAIL,payload:data})
        })

    }
}

export const cleanDetail=()=>{
    return {
        type:CLEAN_DETAIL
    }
}

export const filterCards=(gender)=>{
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) =>{
    return{
        type:ORDER,
        payload:orden
    }

}

export const reset = () =>{
    return{
        type: RESET
    }
}



/* 
codigo antiguo 
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
*/