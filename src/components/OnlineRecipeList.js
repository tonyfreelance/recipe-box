import React from 'react';

import OnlineRecipeSearch from './OnlineRecipeSearch';

let LocalRecipeList = ({recipes, deleteRecipe}) => {
  return (
    <div>
      <OnlineRecipeSearch />
    </div>
  );
};

export default LocalRecipeList;
