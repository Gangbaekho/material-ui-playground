import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'

const App = (props) => { 

  return (
    <Switch>
      <Route exact path="/" render={props => <Home {...props}/>}/>
    </Switch>
  )
};

export default App;
