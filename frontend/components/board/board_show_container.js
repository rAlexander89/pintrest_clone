import {connect} from 'react-redux';
import { fetchBoard, fetchBoardPins } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions';
import BoardShow from './board_show';


const mSTP = ({entities: {boards, boardPins, pins}, ownProps}) => {
    return{
        board: boards[ownProps.match.params.boardId],
        pins: 
    }

}