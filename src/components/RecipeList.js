import React from 'react';
import {connect} from 'react-redux';

import RecipeItem from './RecipeItem';

let RecipeList = ({recipes}) => {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          {...recipe}
        />
      ))}
    </div>
  );
};
RecipeList = connect(state => state)(RecipeList);

export default RecipeList;
