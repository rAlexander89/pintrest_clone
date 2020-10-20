// import React from 'react';
// // import PinIndexItem from './pin_index_item';


// class PinIndex extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = this.props.posts;
//     };

//     componentDidMount(){
//         this.props.fetchPins()
//     }

//     render(){
//         // let {pins} = this.props.pins
//         return(
//             <div>
//                 Hello Boyo!
//                 {console.log(this.state)}
//                 {/* <ul> */}
//                     {/* {this.props.pins.map(pin => (
//                         <p>{pin.photoUrl}</p>
//                     ))} */}
//                 {/* </ul> */}
//             </div>
//         )
//     }
// }

// export default PinIndex;

import React from 'react';
import PinIndexItem from './pin_index_item';
// import Masonry from 'react-masonry-component';
import { Link, withRouter } from 'react-router-dom';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
    }

    // handleClick() {
    //   <Link to='/api/pins/${this.props.match.params.id}'/>
    // }

    render() {
        const { pins} = this.props;

            return(
                <div className="index">
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