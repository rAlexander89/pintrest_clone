import React from 'react';
import {Link} from 'react-router-dom';

class PinShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMont(){
        this.props.fetchPin(this.props.match.params.pinId)
    }

    render(){
        let {pin} = this.props;
        if (pin === undefined) return null;
        return(
            <div>
                <img className="pin-show-item" src={pin.photoUrl} />
            </div>
        )
    }
}

export default PinShow;