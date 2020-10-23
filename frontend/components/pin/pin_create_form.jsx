import React from 'react'
import { NavLink } from 'react-router-dom';

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            owner: this.props.user.username,
            errors: this.props.errors,
            photoFile: null,
            photoUrl: null,
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        // this.hideBackground = this.hideBackground.bind(this);
        // this.choosensave = this.choosensave.bind(this);
    }

    componentDidMount() {
        // const { owner, clearErrors } = this.props;
        const { clearErrors } = this.props;
    }


    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // const { title, description, photoFile, owner } = this.state;
        const { title, description, photoFile } = this.state;
        const formData = new FormData();
        formData.append('pin[title]', title);
        formData.append('pin[description]', description);
        formData.append('pin[photo]', photoFile);
        // formData.append('pin[owner]', owner);
        this.props.createPin(formData).then(
            this.props.history.push(`/pins`)
            
        )
    }


    showImage() {
        document.getElementById("image-preview").classList.toggle("image-load");
    }

    // hideBackground() {
    //     document.getElementById("image-background").remove();
    // }

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
        // this.hideBackground();
        if (file) fileReader.readAsDataURL(file);
    }

    render() {
        console.log('Who is about to post:')
        console.log(this.state.owner)
        // const { owner } = this.state.owner;
        const { title, description, photoUrl, working} = this.state;
        const preview = photoUrl ? <img id="image-preview" src={photoUrl} /> : null;
        return (
            <div className="pin-modal">
                <div className="image-preview">
                    {preview}
                    {console.log(working)}
                </div>
            {console.log(this.state)}
                <div className="pin-form-box">
                    <div className="pin-main-content">
                        <div className="pin-create-fields">
                            <div className="pin-create-inputs">
                                <div className="pin-details">
                                    <div className="pin-add-title">
                                        <input
                                            id='pin-title'
                                            type="text"
                                            placeholder="title"
                                            value={title}
                                            onChange={this.update("title")} />
                                    </div>
                                    <div className="pin-owner">
                                    {/* <!-- preview of image goes here-> */}
                                    </div>
                                    <div className="">
                                        <input
                                            type='textarea'
                                            contentEditable="true"
                                            rows="1"
                                            placeholder="give us a blurb"
                                            value={description}
                                            onChange={this.update("description")}/>
                                        
                                    </div>
                                    <div className="pin-top-buttons">
                                        <button id="save-pin" className="save-pin" onClick={this.handleSubmit}>Save</button>
                                    </div>
                                    <div className="pin-image-box">
                                        <input type="file" name="file-upload" id="file-upload" onChange={this.handleFile} />
                                            <label htmlFor="file-upload">
                                                <div id="image-background">
                                                </div>
                                            </label> 
                                    </div>
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