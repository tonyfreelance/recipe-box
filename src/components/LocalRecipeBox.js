import React from 'react';
import {Jumbotron, PageHeader} from 'react-bootstrap';

import LocalRecipeListContainer from '../containers/LocalRecipeListContainer';
import AddNewRecipe from './AddNewRecipe';

const LocalRecipeBox = () => {
  return (
    <div>
      <PageHeader className="App-title">Local Recipe Box</PageHeader>
      <Jumbotron className="App-container">
        <LocalRecipeListContainer />
      </Jumbotron>
      <AddNewRecipe />
    </div>
  );
};

export default LocalRecipeBox;
