import React from 'react';

class PinShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }

    render() {
        let { pin } = this.props;
        if (pin === undefined) return null;
        return (
            <div>
                <p>{pin.description}</p>
                <p>{pin.owner}</p>
                <p>photo by {pin.title}</p>
                <img className="pin-show-item" src={this.props.pin.photoUrl} />
            </div>
        )
    }
}

export default PinShow;