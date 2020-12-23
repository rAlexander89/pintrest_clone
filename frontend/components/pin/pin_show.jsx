import React from 'react'
import InlineDisplay from '../inline_display/inline_display_container'
import { Link } from 'react-router-dom'
import PinCreateCommentFormContainer from './pin_comment_create_container'
import CommentIndex from './comment_index'
import Likes from '../like/likes_container'



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
                <div className='pin-features'>

                    <div className='pin-sub'>
                        double click title or description to enable edit
                    </div>

                    <div className='pin-delete' onClick={() => this.props.deletePin(pin.id)
                        .then(this.props.history.push(`/users/${owner.id}`))}>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 1024 1024">
                                    
                                <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" 
                                fill="#2d2d2d" />
                            </svg>
                    </div>
                </div>
            )
        }
    }

    render(){

        let { pin, boards, currentUser, owner, comments } = this.props;
        if (pin === undefined) return null;
        let board = boards[pin.board_id]
        if (board === undefined) return null;

        let params = {
            likeable_type: 'Pin',
            likeable_id: pin.id
        }

        return(
            <div className='pin-show'>
                <div className='row'>
                    <div className='column'>
                        <div className="pin-show-item">
        
                            <img className="pin-item" src={this.props.pin.photoUrl} />
                                {this.displayDeleteButton(currentUser, owner, pin)}
                        </div>
                    </div>
                    <div className='column'>
                        <div className='pin-show-det'>
                                <div id='pin-title'><InlineDisplay editType='pin' item={pin} objKey={'title'} field={pin.title}/></div>
                                <div id='pin-owner'>photo by <Link to={`/users/${this.props.owner.id}`}>{this.props.owner.username}</Link></div>
                                <div id='pin-owner'>board title: <Link to={`/users/${this.props.pin.author_id}/boards/${pin.board_id}`}>{board.title}</Link></div>
                                <Likes params={params}/>
                                <div id='pin-description'>
                                    <InlineDisplay editType='pins' item={pin} objKey={'description'} field={pin.description}/>
                                </div>
                        </div>
                        <div className='peripheral-container'>
                            <div className='comment-index'>
                                <div className='comment-header'>
                                    <PinCreateCommentFormContainer currentUser={currentUser} pin_id={pin.id}/>
                                </div>
                                <div className='comment-body'>
                                    <CommentIndex comments={comments} />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow;