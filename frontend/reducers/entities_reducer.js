import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PinsReducer from './pin_reducer';

export default combineReducers({
    users: usersReducer,
    pins: PinsReducer
});
