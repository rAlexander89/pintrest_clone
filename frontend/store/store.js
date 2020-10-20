// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/root_reducer'; 
// import {logger} from 'redux-logger'

// const configureStore = (preloadedState={}) => (
//     createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
// );

// export default configureStore;


/// TOP IS ORIGINAL

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// const middlewares = [thunk];

// if (process.env.NODE_ENV !== "production") {
//     // must use 'require' (import only allowed at top of file)
//     // const { logger } = require("redux-logger");
//     middlewares.push(logger);
// }
const configureStore = (preLoadedState = {}) => {
    return createStore( rootReducer, preLoadedState, applyMiddleware(thunk)
    );
};
export default configureStore;