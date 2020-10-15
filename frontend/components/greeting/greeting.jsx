import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <button onClick={() => openModal('login')}>Login</button> */}
            {/* <Link to="/login" onClick={() => openModal('login')}>Login</Link> */}
            <Link onClick={() => openModal('login')}>Login</Link>
            &nbsp;or&nbsp;
            {/* <Link to="/signup" onClick={() => openModal('login')}>Sign up!</Link> */}
            <Link onClick={() => openModal('signup')}>Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
