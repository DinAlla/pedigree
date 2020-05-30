import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import HomeComponent from './HomeComponent';

const hist = createBrowserHistory();

const App = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={HomeComponent}/>
      <Redirect from="/" to="/home"/>
    </Switch>
  </Router>
);

export default App;