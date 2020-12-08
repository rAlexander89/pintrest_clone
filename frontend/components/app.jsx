import React from 'react'
import GreetingContainer from './greeting/greeting_container.js';
import { Route, Switch, Link } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import ModalContainer from './modal/modal_container';
import SplashContainer from './splash/splash_container.js';
import PinShowContainer from './pin/pin_show_container.js';
import PinIndexContainer from './pin/pin_index_container.js';
import CreatePinContainer from './pin/pin_create_container.js';
import CreateBoardContainer from './board/board_create_container';
import BoardIndexContainer from './board/board_index_container';
import BoardShowContainer from './board/board_show_container';
import UsersBoardsContainer from './board/users_boards_container';
import UserShowContainer from './user/user_profile_container';
import Footer from './splash/footer.jsx';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {pins: []};
        this.redirect = this.redirect.bind(this)
    }

    redirect(){
        if (state.entities.users[state.session.currentUserId]){
            return(
                <div>
                    <Link to='/pins'>
                        <img id='logo' src='https://i.imgur.com/IaouNpW.jpg' />
                    </Link>
                    <h1 id='nav-title'><Link to='/pins'>Pintrest</Link></h1>
                </div>
            )
        } else {
            return(
                <div>
                    <Link to='/'>
                        <img id='logo' src='https://i.imgur.com/IaouNpW.jpg' />
                        </Link>
                <h1 id='nav-title'><Link to='/'>Pintrest</Link></h1>
                </div>
            )
        }
    }


    render(){

        // let loggedIn = state.entities.users[state.session.currentUserId]
        // debugger

        return (
            <div>
                <div className='header'>
                    <div>
                        <Link to='/'>
                        <img id='logo' to='/' src='https://i.imgur.com/IaouNpW.jpg' />
                        </Link>
                        <h1 id='nav-title'><Link to='/'>Pintrest</Link></h1>
                    </div>    
                    <ul id='nav-list'>
                        <li><ModalContainer /></li>
                        <li><GreetingContainer /></li>
                    </ul>
                </div>
                <div className='body'>
                    <Switch>
                        {/* <AuthRoute exact path='/' component={SplashContainer}/>
                        <Route exact path="/pins" component={PinIndexContainer} />
                        <Route exact path="/pins/:pinId" component={PinShowContainer} />
                        <Route exact path="/p/create" component={CreatePinContainer} />
                        <Route exact path="/b/create" component={CreateBoardContainer} />
                        <Route exact path='/users/:userId/boards' component={UsersBoardsContainer}/>
                        <Route exact path='/users/:userId/boards/:boardId' component={BoardShowContainer}/>
                        <Route exact path='/users/:userId' component={UserShowContainer}/>
                        <Route exact path='/boards/' component={BoardIndexContainer}/> */}

                        {/* <AuthRoute exact path='/' component={SplashContainer} />
                        <Route path="/pins" component={PinIndexContainer} />
                        <Route path="/pins/:pinId" component={PinShowContainer} />
                        <Route path="/p/create" component={CreatePinContainer} />
                        <Route path="/b/create" component={CreateBoardContainer} />
                        <Route path='/users/:userId/boards' component={UsersBoardsContainer} />
                        <Route path='/users/:userId/boards/:boardId' component={BoardShowContainer} />
                        <Route path='/users/:userId' component={UserShowContainer} />
                        <Route path='/boards/' component={BoardIndexContainer} /> */}

                        <AuthRoute exact path='/' component={SplashContainer} />
                        <ProtectedRoute exact path="/pins" component={PinIndexContainer} />
                        <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
                        <ProtectedRoute exact path="/p/create" component={CreatePinContainer} />
                        <ProtectedRoute exact path="/b/create" component={CreateBoardContainer} />
                        <ProtectedRoute exact path='/users/:userId/boards' component={UsersBoardsContainer} />
                        <ProtectedRoute exact path='/users/:userId/boards/:boardId' component={BoardShowContainer} />
                        <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
                        <ProtectedRoute exact path='/boards/' component={BoardIndexContainer} />
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