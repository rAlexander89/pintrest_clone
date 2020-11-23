import React from 'react'
import { NavLink } from 'react-router-dom';

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            boardId: '',
            owner: this.props.user.username,
            author_id: this.props.author_id,
            errors: this.props.errors,
            photoFile: null,
            photoUrl: null,
            total: ''
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.boardSelection = this.boardSelection.bind(this);
        // this.selectBoard = this.selectBoard.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchBoards()
        debugger
    }

    boardSelection(boards){
        if (!boards) return null;
        debugger
        return(
            <div className='drop-down-wrapper' id='board-selected'>
                <div className='drop-down-header'>
                    <div className='drop-down-title'>Select a Board</div>
                </div>
                <select onChange={this.update('boardId')} value={this.state.boardId} >
                    {boards.map(board => (  
                        <option 
                            key={board.id}
                            defaultValue={this.state.boardId = board.id}
                            value={board.id}
                        >
                            {board.title}
                        </option>
                    ))}
                </select>
            </div>
        )
    }


    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const { title, description, photoFile, boardId, author_id, owner } = this.state;
        debugger
        const formData = new FormData();
        debugger
        formData.append('pin[title]', title);
        formData.append('pin[author_id]', author_id)
        formData.append('pin[owner]', owner)
        formData.append('pin[description]', description);
        formData.append('pin[photo]', photoFile);
        formData.append('pin[board_id]', boardId);
        console.log(formData)
        
        debugger
        console.log('formData:')
        console.log(formData)
        debugger
        this.props.createPin(formData)
            // .then(
            //     pin => this.props.savePinToBoard({ board_id: parseInt(boardId), pin_id: pin.pin.id }
            // )
            .then(
                console.log('success')
                // pin => this.props.history.push(`/pins/${pin.id}`)
            )
        // )
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

    render() {
        const { title, description, photoUrl, working } = this.state;
        const { boards } = this.props;
        const preview = photoUrl ? <img id="image-preview" src={photoUrl} /> : null;
        return (
            <div className="pin-create-container">
                <div className="image-preview">
                    {preview}
                    {console.log(working)}
                </div>
                {console.log(this.state)}
                <div className="pin-details">
                    <div className="pin-add-title">
                        <input
                            id='pin-title'
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={this.update("title")} />
                    </div>

                    {/* {this.boardSelection(boards)} */}
                    <div className='drop-down-wrapper' id='board-selected'>
                        <div className='drop-down-header'>
                            <div className='drop-down-title'>Select a Board</div>
                        </div>
                        <select onChange={this.update('boardId')} value={this.state.boardId} >
                            {boards.map(board => (
                                <option
                                    key={board.id}
                                    defaultValue={this.state.boardId = board.id}
                                    value={board.id}
                                >
                                    {board.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <input
                            type='textarea'
                            contentEditable="true"
                            rows="1"
                            placeholder="give us a blurb"
                            value={description}
                            onChange={this.update("description")} />

                    </div>
                    <div className="pin-top-buttons">
                        <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                    </div>
                    <input type="file" name="file-upload" id="file-upload" onChange={this.handleFile} />
                    <label htmlFor="file-upload">
                        <div id="image-background">
                        </div>
                    </label>
                </div>
            </div>
        )
    }
}

export default CreatePinForm;