
import React from 'react';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
    }

    render() {
        const { pins } = this.props;

        return (
            <div>
                <h1 id='header'>Latest Pins</h1>
                <div className="index-container">
                    <div className="pin-index-container">
                        {pins.reverse().map((pin) => (
                            <PinIndexItem
                                pin={pin}
                                key={pin.id}
                                photo={pin.photoUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PinIndex