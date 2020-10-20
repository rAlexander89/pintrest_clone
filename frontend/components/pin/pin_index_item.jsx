import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
// import { openModal } from '../../actions/modal_actions';
import PinShowContainer from './pin_show_container'


class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.showPin = this.showPin.bind(this);
    }

    showPin(pin) {
        // e.preventDefault();
        // openModal({modal: 'pin'}),
        return(
            console.log(pin.id),
            <PinShowContainer pin={pin}/>
        )
    }

    render() {
        const { pin } = this.props;

        return (
            <div>
                {/* <Link to={`/pins/${pin.id}`}> */}
                {/* <img className="idx-image" src={pin.photoUrl} onClick={() => openModal('pin')}/> */}
                <Link to={`/pins/${pin.id}`}>
                <img className="idx-image" src={pin.photoUrl} onClick={() => this.showPin(pin)}/>

                </Link>
                {/* <img className="idx-image" src={pin.photoUrl} onClick={(e) => this.showPin(e,pin)}/> */}
                {/* </Link> */}
            </div>
        );
    }
}

export default PinIndexItem;