import React from 'react';
import InlineField from './pin_inline_field_container';
import { Link } from 'react-router-dom';


class PinShow extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchBoards()
        this.props.fetchPin(this.props.match.params.pinId)
        debugger
    }


    render() {
        let { pin, boards } = this.props;
        if (pin === undefined) return null;
        if (boards === undefined) return null;
        if (this.props.owner === undefined) return null;
        let board = boards[pin.board_id]

        return (
            <div className="content-container">
                <div className='pin-show-container'>
                    <div className="pin-show-item">
                        <img className="pin-item" src={this.props.pin.photoUrl} />
                    </div>
                        <div className='pin-show-det'>
                            <ul>
                                <li id='pin-title'><InlineField editType='pin' item={pin} objKey={'title'} field={pin.title}/></li>
                                <li id='pin-owner'>photo by <Link to={`users/${this.props.owner.id}`}>{this.props.owner.username}</Link></li>
                                <li id='pin-owner'>board title <Link to={`boards/${board.id}`}>{board.title}</Link></li>
                                <li id='pin-description'><InlineField editType='pin' item={pin} objKey={'description'} field={pin.description}/></li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}

export default PinShow;