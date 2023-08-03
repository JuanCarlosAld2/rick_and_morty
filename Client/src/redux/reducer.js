import { 
    ADD_FAV,
    REMOVE_FAV,
    GET_CHARACTER_DETAIL,
    CLEAN_DETAIL,
    FILTER,
    ORDER,
    RESET
} from "./actionsTypes";


const initialState ={
    myFavorites:[], // 
    allCharacters:[],// no se toca 
    characterDetail:{}
    
}

const rootReducer = (state=initialState,action) =>{
    switch (action.type) {

        case ADD_FAV:
            return { 

                ...state, myFavorites: action.payload, allCharacters: action.payload
                // ...state,
                // myFavorites:[...state.myFavorites,action.payload],
                // allCharacters:[...state.myFavorites,action.payload]
            };
        case REMOVE_FAV:
               // let newFavorites = state.myFavorites.filter((per)=>per.id !== Number(action.payload))
            return {

                ...state, myFavorites: action.payload, allCharacters:action.payload
                //...state,
                //myFavorites:newFavorites,
                //allCharacters:newFavorites
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
        case FILTER:
            let newFilter =state.allCharacters.filter((per)=> per.gender === action.payload)
            return{
                ...state,
                myFavorites:newFilter
            }
        case ORDER:
            let orden =[...state.allCharacters]
            if(action.payload === "A"){
              orden.sort((a, b) => a.id - b.id);
            }else if(action.payload === "D"){
                orden.sort((a, b) => b.id - a.id);
            }
            return{
                ...state,
                myFavorites: orden
            }
        case RESET:
            return{
                ...state,
                myFavorites:[...state.allCharacters]
            }

        default:
            return {...state};
    }
}

export default rootReducer;