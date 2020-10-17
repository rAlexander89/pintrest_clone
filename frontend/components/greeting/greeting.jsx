import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal, closeModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to='' onClick={() => openModal('login')}>Login</Link>
            &nbsp;or&nbsp;
            <Link to='' onClick={() => openModal('signup')}>Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
            {/* <div onClick={closeModal()} on></div> */}
            <div onLoad={closeModal()} on></div>
            
        </hgroup>
    );

    // if (currentUser){
    //     return(
    //         personalGreeting(),
    //         console.log(currentUser.username)
    //     )
    // } else {
    //     return(
    //         sessionLinks()
    //     )
    // }

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
