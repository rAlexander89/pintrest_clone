import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props)
        this.likesCount = this.likesCount.bind(this)
    }

    componentDidMount(){
        this.props.fetchItemLikes(this.props.params)
    }


    likesCount(likes,currentUserId){
        let includesCurrentUser = false
        let usersLike;
        let likesArray = Object.values(likes)
        let likesCount = likesArray.length
        let { createLike, deleteLike, params } = this.props

        let likeParams = {
            likeable_type: params.likeable_type,
            likeable_id: params.likeable_id
        };


        if (likesCount > 0){
            likesArray.forEach(like => {
                if (like.author_id === currentUserId){
                        includesCurrentUser = true
                        usersLike = like
                }
            })
        }

        if (!includesCurrentUser){
            if (likesCount < 1 ){
                return(
                    <div className='like-menu'>
                        <div className='like-toggle' onClick={() => createLike(likeParams)}>
                            Like |
                        </div>
                        <div className='like-display'>
                            | Be the first to like this!
                        </div>
                    </div>
                )
            } else {
                return(
                    <div className='like-menu'>
                        <div className='like-toggle' onClick={() => createLike(likeParams)}>
                            Like |
                        </div>
                        <div className='like-display'>
                            | {likesCount} users like this.
                        </div>
                    </div>
                )
            }
        } else {
            if ( likesCount <= 1 ){
                return(
                    <div className='like-menu'>
                        <div onClick={() => deleteLike(usersLike)}>
                            Unlike |
                        </div>
                        <div>
                            | You like this.
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='like-menu'>
                        <div className='like-toggle' onClick={() => deleteLike(usersLike)}>
                            Unlike |
                    </div>
                        <div className='like-display'>
                            | {likesCount - 1} users like this.
                    </div>
                    </div>
                )
            }
        }
    }


    render(){
        let { likes, currentUserId } = this.props
        if (likes === undefined) return null;

        return (
            this.likesCount(likes, currentUserId)
        )
    }
}
export default Likes;