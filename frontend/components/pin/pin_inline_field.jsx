import React from 'react'


class InlineField extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isInEditMode: false,
            newData: ''

        }
        this.update = this.update.bind(this);
        this.changeEditMode = this.changeEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatingAPin = this.updatingAPin.bind(this);
        this.updatingABoard = this.updatingABoard.bind(this);
    }

    update(field) {
        debugger
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleSubmit(e){
        let { editType, item, objKey} = this.props
        let { newData } = this.state
        debugger
        switch(editType){
            case 'pin':
                return this.updatingAPin(item,objKey, newData);
                case 'board':
                    return this.updatingABoard(item,objKey, newData);
            case 'profile':
                return;
        }

        this.changeEditMode();
    }

    updatingAPin(item,objKey, newData){
        item[objKey] = newData    
        this.props.updatePin(item)
            .then(
                this.changeEditMode()
            )
    }

    updatingABoard(item, objKey, newData) {
        item[objKey] = newData
        this.props.updateBoard(item)
            .then(
                this.changeEditMode()
            )
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
                onChange={this.update('newData')}
            />
            {/* <button onClick={() => this.handleSubmit}>Savnne</button> */}
            <button type='submit' onClick={(e) => this.handleSubmit(e)}>Save</button>
        </div>
    }

    renderDefaultView() {
        debugger
        let currentUserId = this.props.currentUserId
        let author_id = this.props.item.author_id

        if (currentUserId === author_id){
            return(
            <div onDoubleClick={this.changeEditMode}>
                {this.props.field}
            </div>
            )
        } else {
            return(
                <div>
                    {this.props.field}
                </div>
            ) 
        }
    }

    render(){
        return this.state.isInEditMode ? 
            this.renderEditView() : this.renderDefaultView()
    }

}

export default InlineField