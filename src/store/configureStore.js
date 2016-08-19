import * as redux from 'redux';
import thunk from 'redux-thunk';

import { recipesReducer, authReducer, searchRecipesReducer } from '../reducers/reducers';

export let configure = () => {
  const reducer = redux.combineReducers({
    recipes: recipesReducer,
    auth: authReducer,
    searchRecipes: searchRecipesReducer
  });

  // Avoid redundant info after users log out and log in again
  const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT') {
      state = undefined;
    }
    return reducer(state, action);
  };

  const store = redux.createStore(rootReducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
