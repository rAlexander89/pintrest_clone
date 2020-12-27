import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
import InlineDisplay from '../inline_display/inline_display_container'
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import board_create_container from './board_create_container';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.iteratePins = this.iteratePins.bind(this) 
    }

    // componentDidMount() {
    //     this.props.fetchPins()
    //     this.props.fetchBoard(this.props.board_data)
    //     // this.props.fetchUsers()
    // }

    displayBoardDelete(author, currentUser, board){
        if ( author === currentUser ){
        let authorId = author.id
            return (
                <div onClick={() => this.props.deleteBoard(author.id, board.id)}>
                    Delete Board
                </div>
            )

        this.props.history.push(`/users/${author.id}`)
        }
    }

    iteratePins(thisBoardsPins){
        debugger
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

    // render(){
    //     debugger
    //     let { board, thisBoardsPins, author, currentUser } = this.props;
    //     if (author === null) return null;
    //     if (board === undefined) return null;
    //     // debugger

    //     return(
    //         <div className="content-container">
    //             <div className='board-show-container'>
    //                 <div className='board-show-det'>
    //                     <ul>
    //                         <li id='board-title'><InlineDisplay editType='board' item={board} objKey={'title'} field={board.title} /></li> */}
    //                         <li id='board-owner'>board by {this.props.author.username}</li>
    //                         <li>{this.displayBoardDelete(author, currentUser,board)}</li>
    //                         <li id='board-description'><InlineDisplay editType='board' item={board} objKey={'description'} field={board.description} /></li>
    //                     </ul>
    //                 <div className='board-show-items'>
    //                         {this.thisBoardsPins(pins_arr)}
    //                         {this.iteratePins(thisBoardsPins)}
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    componentDidMount(){
        let boardData = {
            author_id: this.props.board_data.userId,
            id: this.props.board_data.boardId
        }
        debugger
        this.props.fetchBoard(boardData)
        this.props.fetchBoardPins(boardData.id)
    }


    render(){

        let { board, author, currentUser, boardPins } = this.props

        let thisBoardsPins = Object.values(boardPins)

        if (board === undefined ) return null
        if (currentUser === undefined ) return null
        if (thisBoardsPins.length === 0 ) return null
        

        debugger


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