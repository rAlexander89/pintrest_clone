import React from 'react';

import LoginFormContainer from '../session_form/login_form_container';



class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
            return(
                <div>
                    <div className='splash'>
                        <div>
                            <LoginFormContainer/>
                        </div>
                    </div>
                </div>
            )
    }
}
    

export default Splash;