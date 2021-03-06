import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
// import PinShowContainer from '../pin/pin_show';
import PinCreateContainer from '../pin/pin_create_container'
import BoardCreateContainer from '../board/board_create_container'



class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { modal: this.props.modal }
        this.renderModal = this.renderModal.bind(this)
    }


    renderModal(type, history){
        switch(type){
            case 'pin':
                return <PinCreateContainer history={history}/>
            case 'board':
                return <BoardCreateContainer history={history}/>
        }
    }

    render() {

        if (!this.props.modal) return null;
        let { type } = this.props.modal
        let { history } = this.props

        return (
            <div className="modal-background">
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className='modal-tab'>
                        <div onClick={this.props.closeModal} className='close-tab'>x</div>
                    </div>
                    {this.renderModal(type, history)}
                </div>
            </div>
        )
    }
}

export default Modal
