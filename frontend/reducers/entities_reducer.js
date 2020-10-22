import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PinsReducer from './pin_reducer';
import userReducer from './user_reducer';

export default combineReducers({
    users: usersReducer,
    owner: userReducer,
    pins: PinsReducer
});
