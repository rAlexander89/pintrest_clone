import React from 'react';

const Greeting = ({ currentUser, logout, openModal}) => {

    
    const sessionLinks = () => (
        <ul id="login-signup">
        {console.log('why you logging this if user is logged in?')}
        {/* {console.log(currentUser.username)} */}
            <li><button id='loginbtn' onClick={() => openModal('login')}>Log in</button></li>
            <li><button id='signinbtn' onClick={() => openModal('signup')}>Sign up</button></li>
        </ul>
    );

    const personalGreeting = () => (    
        // <hgroup className="header-group">
        //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
        //     <button className="header-button" onClick={logout}>Log Out</button>
        // </hgroup>
        <ul id="login-signup">
            <li>Hi, {currentUser.username}!</li>
            <li><button id="logoutbtn" onClick={logout}>Log Out</button></li>
        </ul>
    );

    // return currentUser ? personalGreeting() : sessionLinks();
    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
