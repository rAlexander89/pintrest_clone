import React from 'react';

const Greeting = ({ currentUser, logout, openModal}) => {

    
    const sessionLinks = () => (
        <ul id="login-signup">
        {/* {console.log(currentUser.username)} */}
            <li><button id='loginbtn' onClick={() => openModal('login')}>Log in</button></li>
            <li><button id='signinbtn' onClick={() => openModal('signup')}>Sign up</button></li>
        </ul>
    );

    const personalGreeting = () => (    
        <div>
            {console.log(currentUser.username)}
            <ul id="login-signup">
                <li>Hi, {currentUser.username}!</li>
                <li>Boards</li>
                <li>Pins</li>
                <li><button id="logoutbtn" onClick={logout}>Log Out</button></li>
            </ul>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
