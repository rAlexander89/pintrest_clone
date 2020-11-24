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
        debugger
        if (pin === undefined) return null;
        if (this.props.owner === undefined) return null;
        if (this.props.owner.username === undefined) return null;
        console.log('the owner is:');

        return (
            <div className="content-container">
                <div className='pin-show-container'>
                    <div className="pin-show-item">
                        <img className="pin-item" src={this.props.pin.photoUrl} />
                    </div>
                        <div className='pin-show-det'>
                            <ul>
                                <li id='pin-title'>{pin.title}</li>
                                <li id='pin-owner'>photo by {this.props.owner.username}</li>
                                <li id='pin-description'>{pin.description}</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}

export default PinShow;