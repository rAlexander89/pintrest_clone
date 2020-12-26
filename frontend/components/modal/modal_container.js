import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import Modal from './modal'
import { withRouter } from 'react-router-dom'

// const mSTP = ({ ui }) => {
const mSTP = (state) => {
    return {
        modal: state.ui.modal,
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default withRouter(connect(mSTP, mDTP)(Modal));