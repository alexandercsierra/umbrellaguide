import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import {Route} from 'react-router-dom'
import AddReview from './components/AddReview';
import Login from './components/Login'
import config from './config';


function App() {
  return (
    <Security {...config.oidc}>
    <div style={{background: 'linear-gradient(#0A1331, #000000)', height: '100vh'}}>
        <Nav/>
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route path="/profile">
          <Profile/>
        </Route> */}
        <Route path="/addreview">
          <AddReview/>
        </Route>
        <Route path="/login">
            <Login/>
          </Route>

        <SecureRoute path='/profile' component={()=> <Profile/>}/>
    </div>
    </Security>
  );
}

export default App;

