import React from 'react';
import {Jumbotron, PageHeader} from 'react-bootstrap';

import RecipeListContainer from '../containers/RecipeListContainer';
import AddNewRecipe from './AddNewRecipe';

const RecipeBox = () => {
  return (
    <div>
      <PageHeader className="App-title">Hanoian Restaurant</PageHeader>
      <Jumbotron className="App-container">
        <RecipeListContainer />
      </Jumbotron>
      <AddNewRecipe />
    </div>
  );
};

export default RecipeBox;
