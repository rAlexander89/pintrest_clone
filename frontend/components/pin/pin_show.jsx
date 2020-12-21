import React from 'react'
import InlineDisplay from '../inline_display/inline_display_container'
import { Link } from 'react-router-dom'
import PinCreateCommentFormContainer from './pin_comment_create_container'
import CommentIndex from './comment_index'
// import { like, unlike } from '../../util/like_api_util'
import Likes from '../like/likes_container'
// import Likes from '../like/likes'



class PinShow extends React.Component {
    constructor(props){
        super(props)
        this.displayDeleteButton = this.displayDeleteButton.bind(this)
        // this.toggleLike = this.toggleLike.bind(this)
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

            // : liked_id, : user_id, : type_liked

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
                            {/* <div onClick={this.toggleLike}><i className="far fa-thumbs-up likebtn"></i>Like</div> */}
                            <Likes params={params}/>
                            {/* <li id='pin-owner' onClick={() => this.likePin(pin.id, currentUser.id, 'pins')}>Like</li> */}
                            <li id='pin-description'><InlineDisplay editType='pins' item={pin} objKey={'description'} field={pin.description}/></li>
                        </ul>
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
        )
    }
}

export default PinShow;