import React from 'react'
import GreetingContainer from './greeting/greeting_container.js';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import SplashContainer from './splash/splash_container.js';
import Footer from './splash/footer.jsx';

const App = () => {
    return (
        <div>
            <div className='header'>
                    <img id='logo' src='https://i.imgur.com/IaouNpW.jpg'/>
                    <h1 id='nav-title'><Link to='/'>Pintrest</Link></h1>
                <ul id='nav-list'>
                    <li><Modal /></li>
                    <li><GreetingContainer /></li>
                </ul>
            </div>
                <div>
                    <SplashContainer />
                </div>
                <div> 
                    <Footer/>
                </div>
        </div>
    );
};


export default App;