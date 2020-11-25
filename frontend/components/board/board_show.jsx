import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
        console.log('howdy')
        this.props.fetchBoardPins()
        console.log('hello')
        console.log('')
        console.log(this.props.boardPins)
    }

    render() {
        let { board } = this.props;
        if (board === undefined) return null;

        return (
            <div className="content-container">
                <div className='board-show-container'>
                    <div className="board-show-item">
                    </div>
                    <div className='board-show-det'>
                        <ul>
                            <li id='board-title'>{board.title}</li>
                            <li id='board-owner'>board by {this.props.owner.username}</li>
                            <li id='board-description'>{board.description}</li>
                        </ul>
                    <div className='board-show-items'>
                                                
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardShow;