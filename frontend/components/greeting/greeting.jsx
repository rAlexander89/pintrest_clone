import React from 'react';

const Greeting = ({ currentUserUsername, logout, openModal}) => {

    
    const sessionLinks = () => (
        <ul id="login-signup">
        {console.log('why you logging this if user is logged in?')}
        {console.log(currentUserUsername)}
            <li><button id='loginbtn' onClick={() => openModal('login')}>Log in</button></li>
            <li><button id='signinbtn' onClick={() => openModal('signup')}>Sign up</button></li>
        </ul>
    );

    const personalGreeting = () => (    
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUserUsername}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    // return currentUser ? personalGreeting() : sessionLinks();
    return currentUserUsername ? personalGreeting() : sessionLinks();
};


export default Greeting;
