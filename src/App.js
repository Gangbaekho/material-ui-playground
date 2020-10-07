import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import LostVillege from './LostVillege'
import Entering from './Entering'
import Login from './Login'
import Test from './Test'

const App = (props) => { 

  return (
    <Switch>
      <Route exact path="/" render={props => <Home {...props}/>}/>
      <Route exact path="/lostvillege" render={props => <LostVillege {...props}/>}/>
      <Route exact path="/entering" render={props => <Entering {...props}/>}/>
      <Route exact path="/login" render={props => <Login {...props}/>}/>
      <Route exact path="/test" render={props => <Test {...props}/>}/>
    </Switch>
  )
};

export default App;
