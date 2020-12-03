import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
import InlineDisplay from '../inline_display/inline_display_container'

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPins()
        this.props.fetchBoardPins()
        this.props.fetchBoard(this.props.board_data)
        this.props.fetchUsers()
    }

    render(){
        let { board, pins, owner } = this.props;
        if (owner === null) return null;
        if (board === undefined) return null;
        if (pins === null) return null;
        let pins_arr = Object.values(pins)

        return(
            <div className="content-container">
                <div className='board-show-container'>
                    <div className="board-show-item">
                    </div>
                    <div className='board-show-det'>
                        <ul>
                            <li id='board-title'><InlineDisplay editType='board' item={board} objKey={'title'} field={board.title} /></li>
                            <li id='board-owner'>board by {this.props.owner.username}</li>
                            <li id='board-description'><InlineDisplay editType='board' item={board} objKey={'description'} field={board.description} /></li>
                        </ul>
                    <div className='board-show-items'>
                        {/* {pins.map( pin => ( */}
                        {pins_arr.map( pin => (
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