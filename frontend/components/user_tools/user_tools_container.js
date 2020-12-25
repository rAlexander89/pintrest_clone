import UserTools from './user_tools';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions'


const mSTP = state => {
    return{
        
    }
};


const mDTP = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        closeModal: () => dispatch(closeModal()),
        openModal: (type) => dispatch(openModal(type))
    };
};

export default connect(mSTP, mDTP)(UserTools);
