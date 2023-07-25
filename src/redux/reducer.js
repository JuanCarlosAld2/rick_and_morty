import { ADD_FAV,REMOVE_FAV,GET_CHARACTER_DETAIL,CLEAN_DETAIL } from "./actionsTypes";


const initialState ={
    myFavorites:[],
    characterDetail:{}
}

const rootReducer = (state=initialState,action) =>{
    switch (action.type) {

        case ADD_FAV:
            return { 
                ...state,
                myFavorites:[...state.myFavorites,action.payload]
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter((per)=>per.id !== Number(action.payload))
            }
        case GET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail:action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                characterDetail:{}
            }
        default:
            return {...state};
    }
}

export default rootReducer;