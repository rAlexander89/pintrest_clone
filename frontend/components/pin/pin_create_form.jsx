import React from 'react'

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            photoFile: null,
            photoUrl: null,
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('[pin]title', this.state.title)
        formData.append('[pin]description', this.state.description)
        formData.append('[pin]photo', this.state.photo)
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => console.log(response.message),
            (response) => console.log(response.responseJSON))       
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
        }
    }


    render() {
        console.log(this.state)
        let { title, description } = this.state;
        return (
            <div>

                <form className="pin-create-form" onSubmit={this.handleSubmit}>
                    <input type='text' 
                        id='form-pin-title' 
                        placeholder='title'
                        value={title}
                        onChange={this.update} 
                        />
                    <br/>
                    <textarea id='form-pin-description' 
                        placeholder='give us a blurb'
                        value={description}
                        onChange={this.update} 
                        />
                    <br/>
                    <input type='file' onChange={this.handleFile}/>
                    <br/>
                    <input type='submit' id='input'>save</input>

                </form>
            </div>
        )
    }
}

export default CreatePinForm;