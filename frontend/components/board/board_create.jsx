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
            .then(board => this.props.history.push(
                `/boards`
            ))
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

            <div className='board-create-container'>
                <div className="pin-details">
                        <div className="pin-add-title">
                            <input
                                id='pin-title'
                                type="text"
                                placeholder="board title"
                                value={this.state.title}
                                onChange={this.update("title")} />
                        </div>

                        <div>
                            <textarea
                                rows="1"
                                placeholder="give us a blurb about your board"
                                value={this.state.description}
                                onChange={this.update("description")} />

                        </div>
                        <div className="pin-top-buttons">
                            <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
            </div>

            
        );
    }
}

export default BoardCreate;