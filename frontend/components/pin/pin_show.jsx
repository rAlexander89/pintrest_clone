import React from 'react';

class PinShow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.owner.username;
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
        // this.props.owner.username
        // this.props.fetchUser(this.props.owner)
    }

    render() {
        let { pin } = this.props;
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
                            {/* <li id='pin-owner'>photo by {this.props.owner.username}</li> */}
                            <li id='pin-owner'>photo by {this.props.owner.username}</li>
                                    {/* {this.props.owner.username} */}
                                <li id='pin-description'>{pin.description}</li>
                            {/* <li className='pin-show-det'>{pin.description}</li> */}
                                <li>sadkasodisjaoidsajdoisadosiudasoidasdoisaudaoiduaoiduasoiduasodiuasdoisaudoisaudaosiudasoipduaoiduasodiusapdoiuasiodusadoiasudoiasudaioduasoiduadusaodiuasodsaudosiaudoaudasoduasoidusaodiupoas</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}

export default PinShow;