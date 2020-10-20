import React from 'react'
import GreetingContainer from './greeting/greeting_container.js';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import SplashContainer from './splash/splash_container.js';
import PinShowContainer from './pin/pin_show_container.js';
import PinIndexContainer from './pin/pin_index_container.js';
import CreatePinContainer from './pin/pin_create_container.js';
import Footer from './splash/footer.jsx';
// import fetchPosts from '../util/pin_api_util.js'



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {pins: []};
        this.fetchPosts = this.fetchPosts.bind(this);

    }

    fetchPosts(){
        $.ajax({
            url: '/api/pins'
        }).then(posts => {
            this.setState({ posts })
        })
    }


    componentDidMount(){
        this.fetchPosts();
    }

    render(){
        return (
            <div>
                <div className='header'>
                    <img id='logo' src='https://i.imgur.com/IaouNpW.jpg' />
                    <h1 id='nav-title'><Link to='/'>Pintrest</Link></h1>
                    <ul id='nav-list'>
                        <li><Modal /></li>
                        <li><GreetingContainer /></li>
                    </ul>
                </div>
                <div>
                    {/* <PinIndex pin={this.state.pins} /> */}
                    <Switch>
                    <Route exact path='/' component={SplashContainer}/>
                    {/* <Route exact path="/images" component={PinIndexContainer} /> */}
                    <Route exact path="/pins" component={PinIndexContainer} />
                    <Route exact path="/pins/:pinId" component={PinShowContainer} />
                    <Route exact path="/pins/create" component={CreatePinContainer} />
                    </Switch>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
};



export default App;