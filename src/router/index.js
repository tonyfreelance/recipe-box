import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from '../components/App';
import Login from '../components/Login';
import LocalRecipeBox from '../components/LocalRecipeBox';
import OnlineRecipeBox from '../components/OnlineRecipeBox';
import OnlineRecipeItem from '../components/OnlineRecipeItem';
import firebase from '../firebase/index';

function requiredLogin(nextState, replace, next) {
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
}

function redirectIfLoggedIn(nextState, replace, next) {
  if(firebase.auth().currentUser) {
    replace('/local-recipes');
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="local-recipes"  component={LocalRecipeBox} onEnter={requiredLogin}/>
      <Route path="online-recipes"  component={OnlineRecipeBox} onEnter={requiredLogin}>
        <Route path="/online-recipes/:recipeId" component={OnlineRecipeBox} onEnter={requiredLogin}/>
      </Route>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
