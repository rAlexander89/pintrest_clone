import React from 'react'
import { NavLink } from 'react-router-dom';

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            owner: this.props.currentUserUsername,
            errors: this.props.errors,
            photoFile: null,
            photoUrl: null,
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        const { owner, clearErrors } = this.props;
    }


    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, description, photoFile, owner } = this.state;
        const formData = new FormData();
        formData.append('pin[title]', title);
        formData.append('pin[description]', description);
        formData.append('pin[photo]', photoFile);
        formData.append('pin[owner]', owner);
        this.props.createPin(formData).then(
            (response) => console.log(response.message),
            (response) => console.log(response.responseJSON)
        )
    }


    showImage() {
        document.getElementById("image-preview").classList.toggle("image-load");
    }

    hideBackground() {
        document.getElementById("image-background").remove();
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                photoFile: file,
                photoUrl: fileReader.result
            });
            this.showImage();
        }
        this.hideBackground();
        if (file) fileReader.readAsDataURL(file);
    }


    render() {
        console.log('Who is about to post:')
        console.log(this.state.owner)
        const { owner } = this.state.owner;
        const { title, description, photoUrl } = this.state;
        const preview = photoUrl ? <img id="image-preview" src={photoUrl} /> : null;
        return (
            <div className="pin-modal">
            {console.log(this.state)}
                <div className="pin-form-box">
                    <div className="pin-top-buttons">
                        <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>                     
                    </div>

                    <div className="pin-main-content">
                        <div className="pin-image-box">
                            <input type="file" name="file-upload" id="file-upload" onChange={this.handleFile} />
                            <label htmlFor="file-upload">
                                <div id="image-background">

                                </div>
                            </label>
                        </div>


                        <div className="pin-create-fields">
                            <div className="pin-create-inputs">
                                <div className="pin-details">
                                    <div className="pin-add-title">
                                
                                        <input
                                            type="text"
                                            placeholder="title"
                                            value={title}
                                            onChange={this.update("title")} />
                                    </div>
                                    <div className="pin-owner">
                                        
                                        {this.props.currentUserUsername}
                                    </div>
                                    <div className="pin-add-description">
                                        <textarea
                                            rows="1"
                                            placeholder="give us a blurb"
                                            value={description}
                                            onChange={this.update("description")}/>
                                    </div>
                                </div>
                                <div className="image-preview">
                                    {preview}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePinForm;