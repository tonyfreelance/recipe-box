import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import RecipeBoxAPI from './api/RecipeBoxAPI';
import {configure} from './store/configureStore';
import {addRecipes} from './actions/actions';

const store = configure();
store.subscribe(() => {
  const state = store.getState();
  console.log('Current state', state);
  RecipeBoxAPI.setLocalStorage(state.recipes);
});

const defaultRecipes = [
  {
    id: '1',
    name: 'Banh beo',
    ingredients: 'Bot my, bot no, banh trang tron'
  },
  {
    id: '2',
    name: 'Trung cut lon',
    ingredients: 'Trung cut, thit lon, mo hanh'
  }
];

const recipes = RecipeBoxAPI.getLocalStorage().length > 0 ? RecipeBoxAPI.getLocalStorage() : defaultRecipes;

store.dispatch(addRecipes(recipes));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
