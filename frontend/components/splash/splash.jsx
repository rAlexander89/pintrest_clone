    import React from 'react';
import PinIndexItem from '../pin/pin_index_item';


class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPins()
    }


    render(){
        let { pins } = this.props
        // if (pins === undefined ) return null


        return(
        <div className='splash'>


            <div className='carousel-div'>
                <p>Get your next</p>
                <div className="carousel">
                    <div className="change_outer">
                        <div className="change_inner">
                            <div id='dummy'>dummy</div>
                            <div id='hallo'>Halloween idea</div>
                            <div id='din'>weeknight dinner idea</div>
                            <div id='home'>home decore idea</div>
                            <div id='look'>new look outfit</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="splash-container">
                {pins.reverse().map((pin) => (
                    <PinIndexItem
                        pin={pin}
                        key={pin.id}
                        photo={pin.photoUrl}
                    />
                ))}
            </div>
        </div>
        )
    }

}
    

export default Splash;