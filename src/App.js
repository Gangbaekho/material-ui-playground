import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import LostVillege from './LostVillege'
import Navigation from './Navigation'
import Entering from './Entering'
import Login from './Login'
import Test from './Test'

const App = (props) => { 

  return (
    <Switch>
      <Route path="/" exact render={props => <Navigation {...props} />} />
      <Route path="/lostvillege" render={props=> <LostVillege {...props}/>}/>
      <Route path="/entering" render={props=> <Entering {...props}/>}/>
      <Route path="/login" render={props=> <Login {...props}/>}/>
      <Route path="/test/:param" render={props => <Test {...props}/>}/>
    </Switch>
  )
};

export default App;
