import * as redux from 'redux';
// import thunk from 'redux-thunk';

import {recipesReducer} from '../reducers/reducers';

export let configure = () => {
  const reducer = redux.combineReducers({
    recipes: recipesReducer
  });

  const store = redux.createStore(reducer, redux.compose(
    // redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
