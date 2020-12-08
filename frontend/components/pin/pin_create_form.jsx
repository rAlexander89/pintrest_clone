import React from 'react'
import { Link } from 'react-router-dom';

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            boardId: '',
            owner: this.props.user.username,
            author_id: this.props.author_id,
            photoFile: '',
            photoUrl: ''
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.selectUserBoards = this.selectUserBoards.bind(this);
        this.displayErrors = this.displayErrors.bind(this);
        this.saveButton = this.saveButton.bind(this);
        this.pbCreateAndRedirect = this.pbCreateAndRedirect.bind(this);
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
       

    pbCreateAndRedirect(pin, boardId){
        this.props.clearErrors()
        this.props.savePinToBoard({ board_id: parseInt(boardId), pin_id: pin.pin.id })
        this.props.history.push(`/pins/${pin.pin.id}`)
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, description, photoFile, boardId, author_id, owner } = this.state;
        const formData = new FormData();

        formData.append('pin[title]', title);
        formData.append('pin[author_id]', author_id);
        formData.append('pin[owner]', owner);
        formData.append('pin[description]', description);
        formData.append('pin[photo]', photoFile);
        formData.append('pin[board_id]', boardId);
        
        this.props.createPin(formData)
            .then(pin => this.pbCreateAndRedirect(pin, boardId))
        
    }


    showImage() {
        document.getElementById("image-preview").classList.toggle("image-load");
    }


    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                photoFile: file,
                photoUrl: fileReader.result,
            });
            this.showImage();
        }
        if (file) fileReader.readAsDataURL(file);
    }

    saveButton(){
        let { photoFile } = this.state
        if (typeof photoFile == 'string' ){
            return null 
        } else {
            return(
                <div className="pin-top-buttons">
                    <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                </div>

            )
        }
    }

    render() {
        const { title, description, photoUrl, working, author_id } = this.state;
        const { boards } = this.props;
        const preview = photoUrl ? <img id="image-preview" src={photoUrl} /> : null;
        
            return (
                <div className="pin-create-container">
                    <div className="image-preview">
                        {preview}
                    </div>
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
                                placeholder="give us a blurb about your pin"
                                value={description}
                                onChange={this.update("description")}
                                />
                            {this.displayErrors('desc')}
                        </div>
                            <input type="file" name="file-upload" id="file-upload" onChange={this.handleFile} />
                            <label htmlFor="file-upload">
                            </label>
                            <br/>
                            <br/>
                        
                        <div className='submit-buttons'>
                            {this.saveButton()}
                        <div>

                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default CreatePinForm;