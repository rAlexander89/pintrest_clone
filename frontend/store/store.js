import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer'; 

const configureStore = (preloadedState={}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;
