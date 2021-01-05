import React from 'react';
import { Link } from 'react-router-dom';
import PinShowContainer from './pin_show_container'


class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.showPin = this.showPin.bind(this);
        this.checklocation = this.checklocation.bind(this)
    }

    showPin(pin) {
        return(
            <PinShowContainer pin={pin}/>
        )
    }

    checklocation(pin){
        let hash = window.location.hash
            return(
                <Link to={`/users/${pin.author_id}/boards/${pin.board_id}/pins/${pin.id}`}>
                    <img className="idx-image" src={pin.photoUrl} onClick={() => this.showPin(pin)}/>
                </Link>
            )
        // }
    }

    render() {
        const { pin } = this.props;
        debugger
        return (
            <div className='pin-index-item'>
                {this.checklocation(pin)}
            </div>
        );
    }
}

export default PinIndexItem;