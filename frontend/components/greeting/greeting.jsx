import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {

    
    const sessionLinks = () => (
        <ul id="login-signup">
            <li><button id='loginbtn' onClick={() => openModal('login')}>Log in</button></li>
            <li><button id='signinbtn' onClick={() => openModal('signup')}>Sign up</button></li>
        </ul>
    );
    <div>

    </div>
    const personalGreeting = () => (    
        <div>
            <ul id="login-signup">
                <li>Hi, {currentUser.username}!</li>
                <li><Link to='/boards/'>Boards</Link></li>
                <li><Link to='/pins/'>Pins</Link></li>
                <li><Link to={`/users/${currentUser.id}`}>My Profile</Link></li>
                <li><Link to='/p/create'><button id='make-pin'>Make a pin</button></Link></li>
                <li><button id='make-board'>Make a board</button></li>
                <li><Link to='/'><button id="logoutbtn" onClick={logout}>Log Out</button></Link></li>
            </ul>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
