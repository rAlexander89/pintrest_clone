import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component{
    constructor(props){
        super(props)
    }



    render(){

        let { comments } = this.props

        return(
            <div className='pin-comments'>
                {comments.reverse().map((comment) => (
                    <CommentIndexItem
                        comment={comment}
                        key={comment.id}
                    />
                ))}
            </div>
        )
    }
}

export default CommentIndex;