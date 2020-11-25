import React from 'react';
import PinIndexItem from '../pin/pin_index_item';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPins()
        this.props.fetchBoardPins()
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render(){
        let { board, pins } = this.props;
        if (board === undefined) return null;
        if (pins === null) return null;
        console.log('howdy')
        console.log(pins)
        console.log('partner')
        debugger
        return(
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
                        {pins.map( pin => (
                            <PinIndexItem 
                                pin={pin}
                                key={pin.id}
                                photo={pin.photoUrl}
                            />
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardShow;