// import {createStore,applyMiddleware,compose} from "redux";
// import rootReducer from "./reducer";
// import thunkMiddleware from "redux-thunk";

// const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
// );
// export default store;

import {createStore,applyMiddleware}from "redux";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension"; // se instala 
import thunk from "redux-thunk"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;