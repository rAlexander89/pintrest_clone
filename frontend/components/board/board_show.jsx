import React from 'react'
import PinIndexItem from '../pin/pin_index_item';
import InlineDisplay from '../inline_display/inline_display_container'
import Swal from 'sweetalert2'
import PinCreateContainer from '../pin/pin_create_container'


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.iteratePins = this.iteratePins.bind(this) 
        this.confirmDelete = this.confirmDelete.bind(this)
        this.deleteAndRedirect = this.deleteAndRedirect.bind(this)
        this.displayBoardDelete = this.displayBoardDelete.bind(this)
    }


    deleteAndRedirect(board){
        let _author_id = board.author_id
        this.confirmDelete(board, _author_id)
    }

    confirmDelete(board, _author_id){
        Swal.fire({
            title: 'Please confirm!',
            text: 'Are you sure you want to delete this board?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes'
        })
        .then(function(result){
            if (result.value){
                $.ajax({
                    url: `/api/users/${board.author_id}/boards/${board.id}`,
                    method: "DELETE",
                    dataType: 'json',
                    beforeSend: function(){
                        Swal.fire({
                            title: 'Please Wait!!!',
                            text: 'Deleting...',
                            onOpen: function(){
                                Swal.showLoading()
                            }
                        })
                    },
                    success : function(data){
                        Swal.fire({
                            type: 'success',
                            title: 'Board deleted succesffully!',
                            showConfirmationButton: false,
                            timer: 2000
                        }).then(function(){
                            location.href=`/#/users/${_author_id}`;
                        })
                    },
                    complete: function(){
                        Swal.hideLoading();
                    },
                    error: function(jqXHR, textStatus, errThrown){
                        Swal.hideLoading();
                        Swal.fire('Oops!', 'Something went wrong! Try again!')
                    }
                }).then(
                )
            }
        })
    }
        


    displayBoardDelete(author, currentUser, board){
        if ( author === currentUser ){
            return (
                <div onClick={() => this.deleteAndRedirect(board)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 1024 1024">
                                    
                                <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" 
                                fill="#2d2d2d" />
                    </svg>
                </div>
            )
        }
        
    }

    iteratePins(thisBoardsPins,  author, currentUser){

        if (thisBoardsPins === null || thisBoardsPins.length === 0){
            if ( author === currentUser){
                return(
                     <div className='empty-board'>
                        This board doesn't have any pins in this board yet! Make one!
                        <PinCreateContainer history={this.props.history}/>
                    </div>

                )
            } else {
                return(
                    <div className='empty-board'>
                        This board doesn't have any pins in this board yet! Make one!
                    </div>
                )
            }
        } else {
                return(
                <div className="pin-index-container">
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
        this.props.fetchUser(boardData.author_id)
        this.props.fetchBoard(boardData)
        this.props.fetchBoardPins(boardData.id)
    }


    render(){

        
        let { board, author, currentUser, boardPins } = this.props
        
        let thisBoardsPins = Object.values(boardPins)
        
        if (board === undefined ) return null
        if (currentUser === undefined ) return null
        if (author === undefined ) return null
        

        return(
            <div className='index-container'>
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
                    </div>

                    {this.iteratePins(thisBoardsPins, author, currentUser)}
            </div>
        )
    }
}

export default BoardShow;