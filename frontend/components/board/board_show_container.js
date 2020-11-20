import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';

import BoardShow from './board_show';

const mSTP = ({ entities: { boards, users }, session }, ownProps) => {

    let board = boards[ownProps.match.params.boardId];
    let owner_id = board ? board.author_id : undefined;

    return {
        currentUser: users[session.id],
        owner: users[owner_id],
        board
    }
}

const mDTP = dispatch => {
    return {
        fetchBoard: boardId => dispatch(fetchBoard(boardId))
    }
}


export default connect(mSTP, mDTP)(BoardShow)