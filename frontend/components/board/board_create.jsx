import React from 'react';

class BoardCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            author_id: this.props.currentUserId,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.createBoard(this.state)
        debugger
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }


    render() {
        // const { closeModal } = this.props
        return (
            <div className="board-form-modal">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create Board</h1>
                    <p>Title</p>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange("name")}
                        placeholder="Give your board a title."
                    />
                    <p>Description</p>
                    <textarea
                        placeholder="Give us a blurb! What's your board about?"
                        value={this.state.description}
                        onChange={this.handleChange("description")}/>
                        {/* <button>Create Board</button> */}
                <button type='submit' className="close-modal-button">Create Board</button>
                </form>
            </div>
        );
    }
}

export default BoardCreate;