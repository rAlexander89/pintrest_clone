    import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPins()
    }


    render(){
        let { pins } = this.props
        if (pins === undefined ) return null


        return(
            <div>
            <div className='splash'>
                <div>
                        <LoginFormContainer/>
                </div>

            </div>

            {/* <div className="background">
                {pins.reverse().map((pin) => (
                    <PinIndexItem
                        pin={pin}
                        key={pin.id}
                        photo={pin.photoUrl}
                    />
                ))} */
            /* </div> */}
        </div>
        )
    }

}
    

export default Splash;