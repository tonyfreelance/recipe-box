import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {configure} from './store/configureStore';
import * as actions from './actions/actions';
import router from './router/';
import firebase from './firebase/index';

const store = configure();

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddRecipes())
    hashHistory.push('/local-recipes');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);
