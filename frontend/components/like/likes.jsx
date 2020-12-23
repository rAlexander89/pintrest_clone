import React from 'react';
import { render } from 'react-dom';

class Likes extends React.Component {
    constructor(props) {
        super(props)
        this.likesCount = this.likesCount.bind(this)
        this.likeUnlikeIcon = this.likeUnlikeIcon.bind(this)
    }

    componentDidMount(){
        this.props.fetchItemLikes(this.props.params)
    }



    likeUnlikeIcon(includesCurrentUser){
        if (includesCurrentUser){
            return(
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 26 26">
                    
                <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558a5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" 
                fill="#e60023" />
                </svg>
            )
        } else {
            return(
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24">
                    
                <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558a5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584c.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z" 
                fill="#2d2d2d" /></svg>
            )
        }
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
                            {this.likeUnlikeIcon(includesCurrentUser)}
                        </div>
                        <div className='like-display'>
                            Be the first to like this!
                        </div>
                    </div>
                )
            } else {
                return(
                    <div className='like-menu'>
                        <div className='like-toggle' onClick={() => createLike(likeParams)}>
                            {this.likeUnlikeIcon(includesCurrentUser)}
                        </div>
                        <div className='like-display'>
                            {likesCount} users like this.
                        </div>
                    </div>
                )
            }
        } else {
            if ( likesCount <= 1 ){
                return(
                    <div className='like-menu'>
                        <div onClick={() => deleteLike(usersLike)}>
                            {this.likeUnlikeIcon(includesCurrentUser)}
                        </div>
                        <div>
                            You like this.
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='like-menu'>
                        <div className='like-toggle' onClick={() => deleteLike(usersLike)}>
                            {this.likeUnlikeIcon(includesCurrentUser)}
                        </div>
                        <div className='like-display'>
                            You and {likesCount - 1} other users like this.
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