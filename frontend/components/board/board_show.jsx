import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
import InlineDisplay from '../inline_display/inline_display_container'

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPins()
        this.props.fetchBoard(this.props.board_data)
        this.props.fetchUsers()
        this.iteratePins = this.iteratePins.bind(this) 
    }

    displayBoardDelete(owner, currentUser, board){
        if ( owner === currentUser ){
        let ownerId = owner.id
            return (
                <div onClick={() => this.props.deleteBoard(owner.id, board.id)}>
                    Delete Board
                </div>
            )

        this.props.history.push(`/users/${owner.id}`)
        }
    }

    iteratePins(thisBoardsPins){
        if (thisBoardsPins === null){
            return(
                <div>
                    This board doesn't have any pins in this board yet!
                </div>
            )
        } else {
                return(
                <div className="index-container">
                    {
                        thisBoardsPins.map(pin => (
                            <PinIndexItem
                                pin={pin}
                                key={pin.id}
                                photo={pin.photoUrl}
                            />
                        ))
                    }
                </div>
            )
        }
    }

    render(){
        let { board, thisBoardsPins, owner, currentUser } = this.props;
        if (owner === null) return null;
        if (board === undefined) return null;

        return(
            <div className="content-container">
                <div className='board-show-container'>
                    <div className='board-show-det'>
                        <ul>
                            <li id='board-title'><InlineDisplay editType='board' item={board} objKey={'title'} field={board.title} /></li>
                            <li id='board-owner'>board by {this.props.owner.username}</li>
                            <li>{this.displayBoardDelete(owner, currentUser,board)}</li>
                            <li id='board-description'><InlineDisplay editType='board' item={board} objKey={'description'} field={board.description} /></li>
                        </ul>
                    <div className='board-show-items'>
                            {/* {this.thisBoardsPins(pins_arr)} */}
                            {this.iteratePins(thisBoardsPins)}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardShow;