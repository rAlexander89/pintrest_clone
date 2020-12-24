import React from 'react';
import { Link } from 'react-router-dom'


class UserTools extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
        this.createOptions = this.createOptions.bind(this)
    }

    modalFunc(props){
        let modalObject = {
            type:post
        }
    }


    createOptions(show){

        if (show){
            return(
                <>
                    <div className='user-tools-item' id='reveal' onClick={() => this.modeFunc('pin')}>
                        + pin
                    </div>
                    <div className='user-tools-item' id='reveal' onClick={() => this.modeFunc('pin')}>
                        + board
                    </div>

                    <div className='user-tools-item' onClick={() => this.setState({ show: !show })}>
                        {/* <Link to='/p/create'> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='r45'
                            width="3.5em" height="3.5em" viewBox="0 0 32 32"><path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="#2d2d2d" /></svg>
                        {/* </Link> */}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='user-tools-item' id='hidden' onClick={() => this.modeFunc('pin')}>
                        + pin
                    </div>
                    <div className='user-tools-item' id='hidden' onClick={() => this.modeFunc('pin')}>
                        + board
                    </div>

                    <div className='user-tools-item' onClick={() => this.setState({ show: !show })}>
                        {/* <Link to='/p/create'> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='r90' 
                            width="3.5em" height="3.5em" viewBox="0 0 32 32"><path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="#2d2d2d" /></svg>
                        {/* </Link> */}
                    </div>
                </>  
            )
        }
    }

    render(){
        let { show } = this.state
        
        return(
            <div className='user-tools'>
                <div className='user-tools-item'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"><g fill="#2d2d2d">
                        <path d="M12 1a11 11 0 1 0 0 22a11 11 0 0 0 0-22zm2.9 19.968h-.086a.471.471 0 0 1-.35-.129a.471.471 0 0 1-.129-.34v-1.29c.006-.428.01-.86.01-1.297a3.385 3.385 0 0 0-.139-.943a1.679 1.679 0 0 0-.496-.802a7.34 7.34 0 0 0 1.868-.432a3.715 3.715 0 0 0 1.344-.883c.373-.392.65-.864.81-1.381c.196-.632.289-1.29.276-1.952a3.797 3.797 0 0 0-.24-1.353a3.569 3.569 0 0 0-.727-1.177c.068-.172.118-.351.148-.534a3.286 3.286 0 0 0-.036-1.262a4.87 4.87 0 0 0-.203-.7a.269.269 0 0 0-.102-.018h-.1c-.21.002-.419.037-.618.102c-.22.064-.436.144-.645.239a5.97 5.97 0 0 0-.606.314a9.992 9.992 0 0 0-.525.332a8.78 8.78 0 0 0-4.714 0a12.367 12.367 0 0 0-.525-.332a5.52 5.52 0 0 0-.616-.314a4.14 4.14 0 0 0-.646-.239a2.02 2.02 0 0 0-.607-.102h-.1a.266.266 0 0 0-.1.019a5.356 5.356 0 0 0-.213.699a3.441 3.441 0 0 0-.027 1.262c.03.183.079.362.147.534a3.565 3.565 0 0 0-.726 1.177a3.797 3.797 0 0 0-.24 1.353a6.298 6.298 0 0 0 .266 1.942c.167.517.443.992.811 1.391c.38.386.838.687 1.344.883c.598.23 1.225.377 1.863.437c-.178.161-.32.36-.414.58c-.09.219-.153.448-.184.682a2.524 2.524 0 0 1-1.077.248a1.639 1.639 0 0 1-.976-.276a2.661 2.661 0 0 1-.69-.755a2.914 2.914 0 0 0-.267-.35a2.459 2.459 0 0 0-.34-.314a1.687 1.687 0 0 0-.397-.22a1.1 1.1 0 0 0-.441-.093a.942.942 0 0 0-.11.01c-.05 0-.1.006-.148.018a.376.376 0 0 0-.12.055a.107.107 0 0 0-.054.091a.304.304 0 0 0 .129.222c.084.068.155.12.212.157l.026.019c.123.094.24.196.35.305c.104.09.197.192.276.303c.083.108.154.226.212.349c.067.123.138.264.212.424c.172.434.478.802.874 1.05c.415.223.882.334 1.353.322c.16 0 .32-.01.48-.028c.156-.025.313-.052.47-.083v1.598a.459.459 0 0 1-.488.477h-.057a9.428 9.428 0 1 1 5.797 0v.005z" /></g></svg>
                </div>
                <div className='user-tools-item'>
                    <a href="https://www.linkedin.com/in/ryan-acosta-1aa428198/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="3em" 
                        height="3em"
                        viewBox="0 0 20 20">
                            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" fill="#2d2d2d" />
                        </svg>
                    </a>
                </div>
                { this.createOptions(show)}

            </div>
        )
    }
}

export default UserTools