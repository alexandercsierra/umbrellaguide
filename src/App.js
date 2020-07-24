import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import {Route} from 'react-router-dom'
import AddReview from './components/AddReview';


function App() {
  return (
    <div style={{background: 'linear-gradient(#0A1331, #000000)', height: '100vh'}}>
        <Nav/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/addreview">
          <AddReview/>
        </Route>
    </div>
  );
}

export default App;

