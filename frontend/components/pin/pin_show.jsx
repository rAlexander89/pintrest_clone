import React from 'react';

class PinShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
        // this.props.fetchUser(this.props.owner)
    }

    render() {
        console.log('the owner of this pin is:')
        console.log(this.props.owner)
        let { pin } = this.props;
        if (pin === undefined) return null;
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
                                <li>sadkasodisjaoidsajdoisadosiudasoidasdoisaudaoiduaoiduasoiduasodiuasdoisaudoisaudaosiudasoipduaoiduasodiusapdoiuasiodusadoiasudoiasudaioduasoiduadusaodiuasodsaudosiaudoaudasoduasoidusaodiupoas</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}

export default PinShow;