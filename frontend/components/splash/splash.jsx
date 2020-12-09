import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';



class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
            return(
                <div>
                    <div className='splash'>
                        <div>
                            <SessionFormContainer/>
                        </div>
                    </div>
                </div>
            )
    }
}
    

export default Splash;