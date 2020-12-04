import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import users from './users_errors_reducer';
import pins from './pins_errors_reducer';
import boards from './boards_errors_reducer';


export default combineReducers({
    session,
    users,
    pins,
    boards
});
