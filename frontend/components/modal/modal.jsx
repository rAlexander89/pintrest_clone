import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import PinShowContainer from '../pin/pin_show';



class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { modal: this.props.modal };
    }

   

    render() {
        if (!this.props.modal) return null;

        return (
            <div className="modal-background">
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className='modal-tab'>
                        <div onClick={this.props.closeModal} className='close-tab'>close</div>
                    </div>
                    {this.props.modal === 'pin' ? < PinShowContainer /> :
                        (this.props.modal === 'login' ? < SessionFormContainer /> :
                            <SignupFormContainer />)}


                </div>
            </div>
        )
    }
}

export default Modal
