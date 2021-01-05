import React from 'react';
import Swal from 'sweetalert2'
import BoardShowContainer from './board_show_container'

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
        this.displayErrors = this.displayErrors.bind(this)
        this.closeAndRedirect = this.closeAndRedirect.bind(this)
    }

     closeAndRedirect(board){
        this.props.clearErrors()
        this.props.closeModal()
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Board created! Redirecting...',
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false
        })
        debugger
        this.props.history.push(`/users/${board.board.author_id}/boards/${board.board.id}`)
        
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state)
        .then(board => this.closeAndRedirect(board))
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

    displayErrors(value) {
        let errors = this.props.errors
        if (errors === undefined) return null

        switch (value) {
            case 'title':
                return (
                    <div className='errors'>
                        {errors[0]}
                    </div>
                )
            case 'desc':
                return (
                    <div className='errors'>
                        {errors[1]}
                    </div>
                )
            default:
                return null;
        }
    }

    render() {
        return (
            <div className='column-board-create'>
                <div className='board-create-container'>
                    <div className="pin-details">
                            <div className="pin-add-title">
                                <input
                                    id='pin-title'
                                    type="text"
                                    placeholder="board title"
                                    value={this.state.title}
                                    onChange={this.update("title")} />
                                {this.displayErrors('title')}
                            </div>

                            <div>
                                <textarea
                                    className='board-blurb'
                                    placeholder="give us a blurb about your board"
                                    value={this.state.description}
                                    onChange={this.update("description")} />
                                {this.displayErrors('desc')}
                            </div>
                            <div className="pin-top-buttons">
                                <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                            </div>
                        </div>
                </div>
            </div>  
        );
    }
}

export default BoardCreate;


// import React from 'react';
// import Swal from 'sweetalert2'
// import { Router, Route } from 'react-router-dom'

// class BoardCreate extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             description: '',
//             author_id: this.props.currentUser.id,
//         };
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.update = this.update.bind(this)
//         this.displayErrors = this.displayErrors.bind(this)
//         this.closeAndRedirect = this.closeAndRedirect.bind(this)
//     }

//     closeAndRedirect(board){
//         this.props.clearErrors()
//         this.props.closeModal()
//         Swal.fire({
//             icon: 'success',
//             title: 'Success!',
//             text: 'Board created! Redirecting...',
//             timer: 3000,
//             showCancelButton: false,
//             showConfirmButton: false
//         })
//         .then(this.props.history.push(`/users/${board.board.author_id}/boards/${board.board.id}`))
        
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.createBoard(this.state)
//         .then(board => this.closeAndRedirect(board))
//     }


    
//     handleChange(field) {
//         return e => {
//             this.setState({ [field]: e.currentTarget.value });
//         };
//     }

//     update(field) {
//         return e => {
//             this.setState({ [field]: e.currentTarget.value })
//         }
//     }

//     displayErrors(value) {
//         let errors = this.props.errors
//         if (errors === undefined) return null

//         switch (value) {
//             case 'title':
//                 return (
//                     <div className='errors'>
//                         {errors[0]}
//                     </div>
//                 )
//             case 'desc':
//                 return (
//                     <div className='errors'>
//                         {errors[1]}
//                     </div>
//                 )
//             default:
//                 return null;
//         }
//     }

//     render() {
//         return (
//             <div className='column-board-create'>
//                 <div className='board-create-container'>
//                     <div className="pin-details">
//                             <div className="pin-add-title">
//                                 <input
//                                     id='pin-title'
//                                     type="text"
//                                     placeholder="board title"
//                                     value={this.state.title}
//                                     onChange={this.update("title")} />
//                                 {this.displayErrors('title')}
//                             </div>

//                             <div>
//                                 <textarea
//                                     className='board-blurb'
//                                     placeholder="give us a blurb about your board"
//                                     value={this.state.description}
//                                     onChange={this.update("description")} />
//                                 {this.displayErrors('desc')}
//                             </div>
//                             <div className="pin-top-buttons">
//                                 <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
//                             </div>
//                         </div>
//                 </div>
//             </div>  
//         );
//     }
// }

// export default BoardCreate;