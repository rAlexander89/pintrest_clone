import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_action'
import { RECEIVE_PIN } from '../actions/pin_actions';



const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ALL_USERS:
            return Object.assign({}, state, action.users)
        case RECEIVE_PIN:
            return Object.assign({}, state, { [action.owner.id]: action.owner });
        default:
            return state;
    }
};

export default usersReducer;
