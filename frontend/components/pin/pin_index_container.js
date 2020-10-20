import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';

import PinIndex from './pin_index';


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    pins: Object.values(state.entities.pins),
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),

});

export default connect(mSTP, mDTP)(PinIndex);