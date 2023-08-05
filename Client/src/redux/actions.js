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
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav';
            const {data}= await axios.post(endpoint,character)//[{…}]
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.log("addFav not found",error.message);
        }
    };
 };

 export const removeFav = (id) => { 
    return async (dispatch) => {
        try {
            const endpoint = `http://localhost:3001/rickandmorty/fav/`; //retorna  [{}]
            const {data} = await axios.delete(`${endpoint}${id}`)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log("removeFAv not found",error.message);
        }
    };
 };
 
 // no modificaremos el archivo Detail.jsx porque suele ser más conveniente utilizar promesas en los useEffect que utilizar async/await.
 //si se puede async await explicacion en useCharacter (hooks)
export const getCharacterDetail= (id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)//cambiar a https://rickandmortyapi.com/api/character/${id} en caso de fallo 
        .then(response => response.json())
        .then(( data ) => {
            if (data.name) dispatch({type:GET_CHARACTER_DETAIL,payload:data})
        })

    }
}
//characater update un useeffect en component detail

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



export const removeFav = (id) =>{
    return{
        type:REMOVE_FAV,
        payload: id,
    }

}
*/