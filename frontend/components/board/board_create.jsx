import React from 'react';

class BoardCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            author_id: this.props.currentUser.id,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state)
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }



    render() {
        return (
            // <div className="board-form-modal">
            //     <form onSubmit={this.handleSubmit}>
            //         <h1 id='header'>Create Board</h1>
            //         <p id='header'>Title</p>
            //         <input
            //             type="text"
            //             value={this.state.title}
            //             onChange={this.handleChange("title")}
            //             placeholder="Give your board a title."
            //         />
            //         <p>Description</p>
            //         <textarea
            //             placeholder="Give us a blurb! What's your board about?"
            //             value={this.state.description}
            //             onChange={this.handleChange("description")}/>
            //     <button type='submit' className="close-modal-button">Create Board</button>
            //     </form>
            // </div>
            /////
            <div className="pin-details">
                    <div className="pin-add-title">
                        <input
                            id='pin-title'
                            type="text"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.update("title")} />
                    </div>

                    <div>
                        {/* <input
                            type='textarea'
                            contentEditable="true"
                            rows="1"
                            placeholder="give us a blurb"
                            value={this.state.description}
                            onChange={this.update("description")} /> */}
                        <textarea
                            contentEditable="true"
                            rows="1"
                            placeholder="give us a blurb"
                            value={this.state.description}
                            onChange={this.update("description")} />

                    </div>
                    <div className="pin-top-buttons">
                        <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                    </div>
                </div>

            
        );
    }
}

export default BoardCreate;