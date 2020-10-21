import React from 'react';

class PinShow extends React.Component {
    constructor(props) {
        super(props)
        // pin = this.props.pin
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }

    render() {
        let { pin } = this.props;
        if (pin === undefined) return null;
        return (
            <div>
                <img className="pin-show-item" src={this.props.pin.photoUrl} />
            </div>
        )
    }
}

export default PinShow;