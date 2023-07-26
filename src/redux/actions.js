import {
    ADD_FAV,
    REMOVE_FAV,
    GET_CHARACTER_DETAIL,
    CLEAN_DETAIL,
    FILTER,
    ORDER,
    RESET
} from './actionsTypes';

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
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
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