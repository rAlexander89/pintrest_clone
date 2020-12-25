
import React from 'react'

class PinCreateCommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment_txt: '',
            user_id:  this.props.currentUser.id,
            pin_id: this.props.pin_id,
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {        
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { comment_txt, pin_id, user_id } = this.state;
        
        const formData = new FormData();
        formData.append('comment[comment_txt]', comment_txt);
        formData.append('comment[user_id]', user_id);
        formData.append('comment[pin_id]', pin_id);
        this.props.createComment(formData)
        this.setState({
            comment_txt: ''
        })
    }

    
    
    
    render() {
        return (
            <form className='comment-form'>
                <textarea
                    className='comment-box'
                    placeholder="Comment here..."
                    value={this.state.comment_txt}
                    onChange={this.update("comment_txt")}
                    />
                <div className='submit-buttons' id="save-pin" onClick={this.handleSubmit}>

                    <svg xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" 
                        focusable="false" 
                        width="1.5em" 
                        // width="20px" 
                        height="1.5em" 
                        viewBox="0 0 24 24">
                        {/* viewBox="15 15 15 15"> */}
                        
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6l-8.054-2.685z" 
                        fill="#ffffff" />
                        {/* fill="#626262" /> */}
                    </svg>
                </div>
            </form>
            )
    }
}

export default PinCreateCommentForm;