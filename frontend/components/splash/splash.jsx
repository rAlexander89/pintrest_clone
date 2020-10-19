import React from 'react';


class Splash extends React.Component {


    // render() {
    //     return (
    //         <div className='splash'>
    //             <div className='carousel'>
    //                 <p>Get your next</p>
    //             </div>
    //         </div>
    //     );
    // }
  


    render() {
        return (
            <div className='splash'>
                <div className='carousel-div'>
                    <p>Get your next</p>
                        <div className="carousel">
                            <div className="change_outer">
                                <div className="change_inner">
                                    <div id='hallo'>Halloween idea</div>
                                    <div id='din'>weeknight dinner</div>
                                    <div id='home'>home decore idea</div>
                                    <div id='look'>new look outfit</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;