import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component{
    constructor(props){
        super(props)
    }



    render(){

        let { comments, currentUser, deleteComment } = this.props


        return(
            <div className='pin-comments'>
                {comments.reverse().map((comment) => (
                    <CommentIndexItem
                        comment={comment}
                        key={comment.id}
                        currentUser={currentUser}
                        deleteComment={deleteComment}
                    />
                ))}
            </div>
        )
    }
}

export default CommentIndex;