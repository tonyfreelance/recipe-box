import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from '../components/App';
import Login from '../components/Login';
import RecipeBox from '../components/RecipeBox';
import firebase from '../firebase/index';

function requiredLogin(nextState, replace, next) {
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
}

function redirectIfLoggedIn(nextState, replace, next) {
  if(firebase.auth().currentUser) {
    replace('/recipes');
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="recipes"  component={RecipeBox} onEnter={requiredLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
