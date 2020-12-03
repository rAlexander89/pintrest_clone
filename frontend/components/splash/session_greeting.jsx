import React from 'react'

class SessionGreeting extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
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
        )

    }
}

export default SessionGreeting