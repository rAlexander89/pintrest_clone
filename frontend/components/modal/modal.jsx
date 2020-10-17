
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = { modal: this.props.modal}
        this.state = this.props.modal
        this.comp = this.comp.bind(this);
        // this.stateSwitch = this.stateSwitch.bind(this);

    }

    comp(){
        let component;
        switch (this.props.modal) {
        case 'login':
            return component = <LoginFormContainer />;
            break;
        case 'signup':
            return component = <SignupFormContainer />;
            break;
        default:
            return null;
        }
    }

    render(){
        if(!this.props.modal) return null;
        let component = this.comp();

        return(
            <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className='modal-tab'>
                    <div onClick={this.props.closeModal} className='close-tab'>close</div>
                </div>
                    {component}
                <div className="switch-tab">
                    <p> Or Sign Up</p>
                </div>
            </div>
        </div>
    )}

}

const mSTP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);



// const mSTP = state => {
//     return {
//         modal: state.ui.modal
//     };
// };

// const mDTP = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal()),
//     };
// };

// export default connect(mSTP, mDTP)(Modal);
