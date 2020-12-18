import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let text;
        let likeBtn = <div className='like-icon-blue'></div>

        const amount = this.props.likes.length;
        const liked = this.props.liked

        if (this.props.type === 'pin') {
            if (amount === 0) {
                text = null;
                likeBtn = null;
            } else if (amount === 1 && liked === true) {
                text = <div className='like-amount'>You</div>;
            } else if (amount === 1 && liked === false) {
                text = <div className='like-amount'>1 other</div>;
            } else if (amount > 1 && liked === true) {
                text = <div className='like-amount'>You and {this.props.likes.length - 1} others</div>;
            } else if (amount > 1 && liked === false) {
                text = <div className='like-amount'>{this.props.likes.length} others</div>
            }
        } else {
            if (amount === 0) {
                text = null;
                likeBtn = null;
            } else {
                text = <div className='like-amount-comment'>{amount}</div>;
                likeBtn = <div className='like-icon-blue-comment'></div>
            }

        }

        return (
            <>
                {this.props.type === 'Post' ? <div className='display-like-count'>
                    {text}
                    {likeBtn}
                </div> : <div className='display-like-count-comment'>
                        {text}
                        {likeBtn}
                    </div>
                }
            </>
        );
    }
}
export default Likes;