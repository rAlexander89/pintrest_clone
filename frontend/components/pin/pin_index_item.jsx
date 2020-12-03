import React from 'react';
import { Link } from 'react-router-dom';
import PinShowContainer from './pin_show_container'


class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.showPin = this.showPin.bind(this);
    }

    showPin(pin) {
        return(
            <PinShowContainer pin={pin}/>
        )
    }

    render() {
        const { pin } = this.props;

        return (
            <div>
                <Link to={`/pins/${pin.id}`}>
                <img className="idx-image" src={pin.photoUrl} onClick={() => this.showPin(pin)}/>
                </Link>
            </div>
        );
    }
}

export default PinIndexItem;