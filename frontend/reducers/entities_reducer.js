import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PinsReducer from './pin_reducer';
import boardsReducer from './board_reducer';

export default combineReducers({
    users: usersReducer,
    pins: PinsReducer,
    boards: boardsReducer
});
