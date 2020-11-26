import React from 'react';
import InlineField from './pin_inline_field';
// import './pin_css.css';


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
        if (this.props.owner === undefined) return null;
        if (this.props.owner.username === undefined) return null;

        return (
            // <div className="content-container">
            //     <div className='pin-show-container'>
            //         <div className="pin-show-item">
            //             <img className="pin-item" src={this.props.pin.photoUrl} />
            //         </div>
            //             <div className='pin-show-det'>
            //                 <ul>
            //                     <li id='pin-title'>{pin.title}</li>
            //                     <li id='pin-owner'>photo by {this.props.owner.username}</li>
            //                     <li id='pin-description'>{pin.description}</li>
            //                 </ul>
            //             </div>
            //     </div>
            // </div>
            <div className="content-container">
                <div className='pin-show-container'>
                    <div className="pin-show-item">
                        <img className="pin-item" src={this.props.pin.photoUrl} />
                    </div>
                        <div className='pin-show-det'>
                            <ul>
                                <li id='pin-title'><InlineField item={pin} objKey={'title'} field={pin.title}/></li>
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