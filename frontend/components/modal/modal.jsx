import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import PinShowContainer from '../pin/pin_show';
import { render } from 'react-dom';
import { withRouter } from 'react-router-dom';



class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {modal: this.props.modal};
        // this.modalSelector = this.modalSelector.bind(this);
    }

    // modalSelector(){
    //     switch (this.props.modal) {
    //         case 'login':
    //             // return < LoginFormContainer />;
    //             console.log('hello')
    //             break;
    //         // case 'signup':
    //         //     return <SignupFormContainer />
    //         // case 'pin':
    //         //     return <PinShowContainer/>
    //         default:
    //             null;
    //     }
    // }

    render() {
        debugger
        if (!this.props.modal) return null;

        return (
            <div className="modal-background">
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className='modal-tab'>
                        <div onClick={this.props.closeModal} className='close-tab'>close</div>
                    </div>
                    {/* {this.props.modal === 'login' ? < LoginFormContainer /> : <SignupFormContainer /> } */}
                    {/* {this.modalSelector} */}
                    {this.props.modal === 'pin' ? < PinShowContainer /> : 
                        (this.props.modal === 'login' ? < LoginFormContainer /> : 
                            <SignupFormContainer /> )  }
                        
                    
                </div>
            </div>
        )
    }
}

const mSTP = ({ ui }, ownProps) => {
    return {
        modal: ui.modal,
    };
};


const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mSTP, mDTP)(Modal);