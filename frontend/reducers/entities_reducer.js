import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PinsReducer from './pin_reducer';
import boardsReducer from './board_reducer';
import boardPinsReducer from './board_pins_reducer';
import commentsReducer from './comments_reducer';

export default combineReducers({
    users: usersReducer,
    pins: PinsReducer,
    boards: boardsReducer,
    boardPins: boardPinsReducer,
    comments: commentsReducer
});
