import React from 'react'
import Swal from 'sweetalert2'
import { deleteComment } from '../../actions/comment_actions'

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.displayDeleteButton = this.displayDeleteButton.bind(this)
        this.deletePinComment = this.deletePinComment.bind(this)
    }

    deletePinComment(commentId){
        this.props.deleteComment(commentId)
    }




    displayDeleteButton(currentUser, author, commentId){
    if ( currentUser === author ){
        return(
            <div className='pin-features'>

                {/* <div className='pin-sub'>
                    double click title or description to enable edit
                </div> */}
                <div className='pin-delete' onClick={() => this.deletePinComment(commentId)}>
                    
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
        let { comment, currentUser } = this.props


        return(
            <div className='comment-index-item'>
                <div className='comment-index-item-content'>
                    <div className='comment-user-profile-photo'>
                    </div>

                    <div className='comment-text-container'>
                        <div className='comment-text'>
                            {comment.comment_txt}
                        </div>

                        <div className='comment-user-username'>
                        by {comment.username}

                        {this.displayDeleteButton(currentUser.username, comment.username, comment.id )}
                        </div>
                    </div>
                    <div className='comment-functions'>

                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem
