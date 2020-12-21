
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
        const {comment_txt} = this.state;
        
            return (
                <form>
                        <textarea
                            placeholder="Comment here..."
                            value={this.state.comment_txt}
                            onChange={this.update("comment_txt")}
                            />
                    <div className='submit-buttons'>
                        <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                    <div>
                        </div>
                    </div>
                </form>
            )
    }
}

export default PinCreateCommentForm;