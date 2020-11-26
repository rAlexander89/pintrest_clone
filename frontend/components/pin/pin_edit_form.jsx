import React from 'react'
import { withRouter } from 'react-router-dom'


class EditPinForm extends React.Component{
    construcotr(props){
        const { title, description, board_id } = this.props.pin
        this.state = {
            title,
            description,
            board_id
        }
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        const { title, description, board_id } = this.state
        const { pin, currentUserId } = this.props;
        if (pin.author_id === currentUserId) {
            let newUser
        }

    }

}

export default withRouter(EditPinForm)