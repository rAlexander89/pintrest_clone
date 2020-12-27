import React from 'react'
import PinIndexItem from '../pin/pin_index_item';
import InlineDisplay from '../inline_display/inline_display_container'
import Swal from 'sweetalert2'


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.iteratePins = this.iteratePins.bind(this) 
        this.confirmDelete = this.confirmDelete.bind(this)
        this.deleteAndRedirect = this.deleteAndRedirect.bind(this)
    }


    deleteAndRedirect(board){
        let _author_id = board.author_id
        // let _history = this.props.history
        debugger
        // this.props.clearErrors()
        this.confirmDelete(board, _author_id)
        // .then(
            // res => this.props.history.push(`/users/${author_id}`)
        // )
        // this.props.history.push(`/users/${author_id}`)
            // .then(() => this.props.history.push(`/users/${author_id}`))
            
        // this.props.closeModal()
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
                // <div onClick={() => this.props.deleteBoard(author.id, board.id)}>
                // <div onClick={() => this.confirmDelete(author, board)}>
                <div onClick={() => this.deleteAndRedirect(board)}>
                    Delete Board
                </div>
            )
            // .then(
            // this.props.history.push(`/users/${author.id}`)
            // )
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
        this.props.fetchBoard(boardData)
        this.props.fetchBoardPins(boardData.id)
    }


    render(){
        let { board, author, currentUser, boardPins } = this.props

        let thisBoardsPins = Object.values(boardPins)

        if (board === undefined ) return null
        if (currentUser === undefined ) return null

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

                    {this.iteratePins(thisBoardsPins)}
            </div>
        )
    }
}

export default BoardShow;