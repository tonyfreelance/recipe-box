import React from 'react';
import {connect} from 'react-redux';

import RecipeItem from './RecipeItem';

function RecipeList({recipes}) {
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
}

export default connect(state => state)(RecipeList);
