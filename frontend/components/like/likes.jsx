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
        let likesArray = Object.values(likes)
        let likesCount = likesArray.length

        if (likesCount > 0){
            likesArray.forEach(like => {
                if (like.author_id === currentUserId){
                        includesCurrentUser = true
                }
            })
        }




        if (includesCurrentUser){
            return(
                <div>
                    You and {likesCount - 1} users others like this.
                </div>
            )
        } else {
            return <div>
                {likesCount} users like this.
            </div>
        }
    }



    render(){
        let { likes, currentUserId } = this.props
        if (likes === undefined) return null;

        return (
            <div>
            {this.likesCount(likes, currentUserId)}
            </div>
        );
    }
}
export default Likes;