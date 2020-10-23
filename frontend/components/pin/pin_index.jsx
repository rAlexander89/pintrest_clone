

// import React from 'react';
// import { Link } from 'react-router-dom';
// import PinIndexItem from './pin_index_item';

// class PinIndex extends React.Component {
//     constructor(props) {
//         super(props);
//         this.clickity = this.clickity.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchPins()
//     }

//     clickity(e){
//         e.preventDefault();
//         console.log('click')
//     }



//     render() {
//         let { openModal } = this.props;
//         const { pins } = this.props;

//             return(
//                 <div className="index-container">
//                         {pins.map((pin) => (
//                             // <Link onClick={() => openModal('login')}>
//                             <PinIndexItem
//                                 pin={pin}
//                                 key={pin.id}
//                                 photo={pin.photoUrl}
//                                 type='pin'
//                                 openModal={openModal}
//                             />
//                             // </Link>
//                         ))}
//                 </div>
//             );
//     }
// }

// export default PinIndex

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