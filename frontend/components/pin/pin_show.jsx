import React from 'react'
import InlineDisplay from '../inline_display/inline_display_container'
import { Link } from 'react-router-dom'
import PinCreateCommentFormContainer from './pin_comment_create_container'
import CommentIndex from './comment_index'


class PinShow extends React.Component {
    constructor(props){
        super(props)
        this.displayDeleteButton = this.displayDeleteButton.bind(this)
    }


    componentDidMount(){
        this.props.fetchBoards()
        this.props.fetchPin(this.props.match.params.pinId)
        this.props.fetchPinComments(this.props.match.params.pinId)
    }

    displayDeleteButton(currentUser, owner, pin){
        if ( currentUser === owner ){
            return(
                <div onClick={() => this.props.deletePin(pin.id)
                    .then(this.props.history.push(`/users/${owner.id}`))}>
                    Delete Pin
                </div>
            )
        }
    }

    render(){
        let { pin, boards, currentUser, owner, comments } = this.props;
        if (pin === undefined) return null;
        let board = boards[pin.board_id]
        if (board === undefined) return null;

        return(
            <div className="content-container">
                <div className='pin-show-container'>
                    <div className="pin-show-item">
                        <img className="pin-item" src={this.props.pin.photoUrl} />
                    </div>
                    <div className='pin-show-det'>
                        <ul>
                            <li id='pin-title'><InlineDisplay editType='pin' item={pin} objKey={'title'} field={pin.title}/></li>
                            <li id='pin-owner'>photo by <Link to={`/users/${this.props.owner.id}`}>{this.props.owner.username}</Link></li>
                            <li>{this.displayDeleteButton(currentUser, owner, pin)}</li>
                            <li id='pin-owner'>board title: <Link to={`/users/${this.props.pin.author_id}/boards/${pin.board_id}`}>{board.title}</Link></li>
                            <li id='pin-description'><InlineDisplay editType='pin' item={pin} objKey={'description'} field={pin.description}/></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <PinCreateCommentFormContainer currentUser={currentUser} pin_id={pin.id}/>
                </div>
                <div>
                    <CommentIndex comments={comments} />
                </div>
            </div>
        )
    }
}

export default PinShow;