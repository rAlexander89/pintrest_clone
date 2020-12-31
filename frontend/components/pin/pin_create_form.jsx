import React from 'react'
import { Link } from 'react-router-dom'
import DropZone from 'react-dropzone'
import Swal from 'sweetalert2'



class CreatePinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            boardId: '',
            owner: this.props.user.username,
            author_id: this.props.author_id,
            photoFile: null,
            photoUrl: null,
            display: 'image-preview',
            dropMessage: "Drag and drop or click to upload",
            dropPreviewMessage: "Drop To Preview!",
            dropErrorMessage: "Invalid File",
            backroundImage: "https://i.imgur.com/elPWvzM.png",
        }

        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.selectUserBoards = this.selectUserBoards.bind(this)
        this.displayErrors = this.displayErrors.bind(this)
        this.saveButton = this.saveButton.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.removePreview = this.removePreview.bind(this)
        this.closeAndRedirect = this.closeAndRedirect.bind(this)
    }

    
    componentDidMount() {
        this.props.fetchBoards()
        this.props.clearErrors()
    }




    selectUserBoards(userId, boards){
        if (boards === undefined) return null
        let userBoards = []
        Object.values(boards).forEach(board => {
            if (board.author_id == userId) {
                userBoards.push(board)
            }
        })

        if (userBoards.length === 0 ){
            return(
                <div className='no-board-warning'>
                    <br/>
                    You don't have any boards. You must make one before saving a pin. <br/>
                    <Link to='/b/create' id='warning-link'>Click here</Link> to make a board.
                </div>
            )
        } else {
            return(
                <div className='drop-down-wrapper' id='board-selected'>
                    <div className='drop-down-header'>
                        <div className='drop-down-title'>Select a Board</div>
                    </div>
                <select onChange = { this.update('boardId') }>
                    <option defaultValue ='' selected disabled hidden>
                        Select an Option
                    </option>
                {
                    userBoards.reverse().map(board => (
                        <option
                        key={board.id}
                        value={board.id}
                        >
                            {board.title}
                        </option>
                    ))
                }
                </select >
                {this.displayErrors('board')}
                </div>
            )
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    displayErrors(value){
       let errors  = this.props.errors
        if (errors === undefined) return null

       switch(value){
           case 'title':
               return(
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
           case 'board':
               return (
                   <div className='errors'>
                       {errors[2]}
                   </div>
               )
            default:
                return null;
       }
    }

    closeAndRedirect(pin){
        this.props.clearErrors()
        this.props.closeModal()
        debugger
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Pin created! Redirecting...',
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false
        })
        this.props.history.push(`/pins/${pin.pin.pin.id}`)
    }


    handleSubmit(e) {
        e.preventDefault();
        const { title, description, photoFile, boardId, author_id, owner} = this.state;
        const formData = new FormData();

        formData.append('pin[title]', title);
        formData.append('pin[author_id]', author_id);
        formData.append('pin[owner]', owner);
        formData.append('pin[description]', description);
        formData.append('pin[photo]', photoFile);
        formData.append('pin[board_id]', boardId);

        
        this.props.createPin(formData)
            .then( pin => this.closeAndRedirect(pin))
    }

    saveButton(){
        let { photoFile } = this.state

        if (photoFile === null ){
            return null 
        } else {
            return(
                <div className="pin-top-buttons">
                    <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                </div>
            )
        }
    }


    clearPhoto(){
        let { photoFile } = this.state

        if (photoFile === null ){
            return null 
            
        } else {
            return(
                <button className='clear-pin' onClick={this.removePreview}>
                    Clear Pin
                </button>
            )
        }
    }
    
    onDrop(acceptedFiles) {
        let file = acceptedFiles[0];
        let fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ 
                photoFile: file, 
                photoUrl: fileReader.result 
            });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

      dropZone() {

        let backgroundImage = this.state.photoUrl || this.state.backroundImage
        let dropMessage = this.state.dropMessage
        
        if (this.state.photoUrl){
            dropMessage = ""
        }
        
        return (
        <div className='image-preview'>

                <DropZone
                onDrop={this.onDrop}
                accept="image/*"
                minSize={0}
                maxSize={20000000}
                >

                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <div {...getRootProps()} className="heightUpload txt-light">
                    <input {...getInputProps()} className="txt-light" />
                        <img className="background-image" src={backgroundImage}/>
                        
                        <div className="drop-message">
                            {!isDragActive && dropMessage}
                            {!isDragActive && ""}
                            {isDragActive && !isDragReject && this.state.dropPreviewMessage}
                            {isDragReject && this.state.dropErrorMessage}
                        </div>
                    </div>
                )}
                </DropZone>

                {this.clearPhoto()}
        </div>
        )
    }

  removePreview() {
    this.setState({ 
        photoFile: null,
        photoUrl: null 
    })
  }


    render() {
        let { title, description, photoUrl, working, author_id } = this.state;
        let { boards } = this.props;
        
            return (
                <div className="pin-create-container">
                    <div className='row'>
                        <div className='column-pin-create'>
                            {this.dropZone()}
                        </div>

                        <div className='column-pin-create'>
                            <div className="pin-details">
                                <div className="pin-add-title">
                                    <input
                                        id='pin-title'
                                        type="text"
                                        placeholder="pin title"
                                        value={title}
                                        onChange={this.update("title")}
                                        />
                                        {this.displayErrors('title')}
                                </div>

                                <br/>
                                    {this.selectUserBoards(author_id, boards)}
                                <br/>
            
                                <div>
                                    <textarea
                                        className='pin-blurb'
                                        placeholder="give us a blurb about your pin"
                                        value={description}
                                        onChange={this.update("description")}
                                        />
                                    {this.displayErrors('desc')}
                                </div>
                                    <br/>
                                <div className='submit-comment'>
                                    {this.saveButton()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default CreatePinForm;