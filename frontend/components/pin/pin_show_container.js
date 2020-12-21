import { connect } from 'react-redux';
import { fetchPin, deletePin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import { fetchPinComments } from '../../actions/comment_actions';
import { getLikes } from '../../reducers/selectors';

import PinShow from './pin_show';

const mSTP = ({ entities: { pins, users, boards, comments, likes }, session }, ownProps) => {

    let pin = pins[ownProps.match.params.pinId];
    let owner_id = pin ? pin.author_id : undefined;

    
    return {
        currentUser: users[session.currentUserId],
        owner: users[owner_id],
        pin,
        boards: boards,
        comments: Object.values(comments),
        likes: getLikes(likes, pin)
    }
}

const mDTP = dispatch => {
    return {
        fetchPin: pinId => dispatch(fetchPin(pinId)),
        deletePin: pinId => dispatch(deletePin(pinId)),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchPinComments: pinId => dispatch(fetchPinComments(pinId))
    }
}


export default connect(mSTP, mDTP)(PinShow)