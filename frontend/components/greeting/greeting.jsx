import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {

    const personalGreeting = () => (    
        <div className="nav-buttons">
            <div className='dropdown'>
                <span className='dropdown-header'>Hi, {currentUser.username} <i className="arrow down"></i></span>
                <div className="dropdown-content">
                    <p className='dropdown-item'><Link to='/boards/'>Boards</Link></p>
                    <p className='dropdown-item'><Link to='/pins/'>Pins</Link></p>
                    <p className='dropdown-item'><Link to={`/users/${currentUser.id}`}>My Profile</Link></p>
                    <p className='dropdown-item' onClick={logout}><Link to='/'>Log Out</Link></p>
                </div>  
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : null;
};


export default Greeting;
