import React from 'react';

import LocalRecipeItem from './LocalRecipeItem';

let LocalRecipeList = ({recipes, deleteRecipe}) => {
  return (
    <div>
      {recipes.length > 0 ?
        recipes.map(recipe => (
          <LocalRecipeItem
            key={recipe.id}
            {...recipe}
            deleteRecipe={() => deleteRecipe(recipe.id)}
          />
        )) :
          <p>You don't have any recipe yet!</p>}
    </div>
  );
};

export default LocalRecipeList;
