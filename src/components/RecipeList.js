import React from 'react';

import RecipeItem from './RecipeItem';

let RecipeList = ({recipes, deleteRecipe}) => {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          {...recipe}
          deleteRecipe={() => deleteRecipe(recipe.id)}
        />
      ))}
    </div>
  );
};

export default RecipeList;
