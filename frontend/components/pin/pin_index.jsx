
import React from 'react';
import PinIndexItem from './pin_index_item';
import CreatePinForm from './pin_create_form';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
    }


    render() {
        debugger
        const { pins } = this.props;

        return (
            <div className="index-container">
                {pins.map((pin) => (
                    <PinIndexItem
                        pin={pin}
                        key={pin.id}
                        photo={pin.photoUrl}
                    />
                ))}
            </div>
        );
    }
}

export default PinIndex