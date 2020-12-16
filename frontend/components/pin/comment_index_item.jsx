import React from 'react';

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let { comment } = this.props

        return(
            <div className='comment-index-item'>
                <div className='comment-user-data-item'>
                    <div className='comment-user-profile-photo'>
                    </div>
                    <div className='comment-user-username'>
                    {comment.username}
                    </div>

                </div>
                <div className='comment-text-container'>
                    <div className='comment-text'>
                        {comment.comment_txt}
                    </div>
                </div>
                <div className='comment-functions-container'>
                    <div className='comment-functions'>

                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem
