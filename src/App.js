import React, {Component} from 'react';
import {Route, withRouter ,Switch} from 'react-router-dom';

import auth0Client from './Auth';
import Callback from './callback';
import List from './Container/list/list';
import NavBar from './Component/Navbar/navBar';
import Home from './Component/Home';

class App extends Component {
  render() {
    let route=<Switch>
   <Route exact path='/callback' component={Callback}/>
    <Route path='/' component={Home}></Route>
    </Switch>

    if(auth0Client.isAuthenticated()){
      route=<Switch>
      <Route exact path='/callback' component={Callback}/>
      <Route exact path='/list' component={List}/>
      </Switch>
    }
    return (
      <div>
        <NavBar></NavBar>

        {route}

      </div>
    );
  }
}

export default withRouter(App);