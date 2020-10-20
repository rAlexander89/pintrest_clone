import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
// import { openModal } from './modal/modal';
import { openModal } from '../../actions/modal_actions';

import PinIndex from './pin_index';


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    pins: Object.values(state.entities.pins),
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(mSTP, mDTP)(PinIndex);