import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {
        debugger
        let { board } = this.props;
        if (board === undefined) return null;
        // if (this.props.owner === undefined) return null;
        // if (this.props.owner.username === undefined) return null;
        console.log('the owner is:');

        return (
            <div className="content-container">
                <div className='board-show-container'>
                    <div className="board-show-item">
                        {/* <img className="board-item" src={this.props.board.photoUrl} /> */}
                    </div>
                    <div className='board-show-det'>
                        <ul>
                            <li id='board-title'>{board.title}</li>
                            <li id='board-owner'>photo by {this.props.owner.username}</li>
                            <li id='board-description'>{board.description}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardShow;