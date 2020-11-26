import React from 'react'
import pin_create_container from './pin_create_container';

class InlineField extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isInEditMode: false
        }
        this.changeEditMode = this.changeEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        debugger
        let fieldToUpdate;
        this.changeEditMode();
    }

    changeEditMode() {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    renderEditView() {
        return <div>
            <input
                type='text'
                defaultValue={`${this.props.field}`}
            />
            {/* <button onClick={() => this.handleSubmit}>Savnne</button> */}
            <button onClick={() => this.handleSubmit()}>Savnne</button>
        </div>
    }

    renderDefaultView() {
        return <div onDoubleClick={this.changeEditMode}>
                {this.props.field}
        </div>
    }

    updateAPin(){
        let updatedPin = {
            id: this.props.item.id
        }

    }





    render(){
        return this.state.isInEditMode ? 
            this.renderEditView() : this.renderDefaultView()
    }



}

export default InlineField