import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
import InlineDisplay from '../inline_display/inline_display_container'


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.iteratePins = this.iteratePins.bind(this) 
    }


    displayBoardDelete(author, currentUser, board){
        if ( author === currentUser ){
            return (
                <div onClick={() => this.props.deleteBoard(author.id, board.id)}>
                    Delete Board
                </div>
            )

        this.props.history.push(`/users/${author.id}`)
        }
    }

    iteratePins(thisBoardsPins){

        if (thisBoardsPins === null || thisBoardsPins.length === 0){
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

    componentDidMount(){
        let boardData = {
            author_id: this.props.board_data.userId,
            id: this.props.board_data.boardId
        }
        this.props.fetchBoard(boardData)
        this.props.fetchBoardPins(boardData.id)
    }


    render(){

        let { board, author, currentUser, boardPins } = this.props

        let thisBoardsPins = Object.values(boardPins)

        if (board === undefined ) return null
        if (currentUser === undefined ) return null
        if (thisBoardsPins.length === 0 ) return null

        return(
            <div className='content-container'>
                <div className='board-show-container'>
                    <div className='board-show-det'>
                        <div id='board-title'>
                            {board.title}
                        </div>
                        <div id='board-owner'>
                            board by {this.props.author.username}
                        </div>
                        <div>
                            {this.displayBoardDelete(author, currentUser,board)}
                        </div>
                        <div id='board-description'>
                            <InlineDisplay editType='board' item={board} objKey={'description'} field={board.description} />
                        </div>
                         <div className='board-show-items'>
                             {this.iteratePins(thisBoardsPins)}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default BoardShow;