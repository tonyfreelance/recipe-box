export const addRecipe = (name, ingredients) => {
  return {
    type: 'ADD_RECIPE',
    name,
    ingredients
  }
}

export const addRecipes = (recipes) => {
  return {
    type: 'ADD_RECIPES',
    recipes
  }
}

export const editRecipe = (recipe) => {
  return {
    type: 'EDIT_RECIPE',
    recipe
  }
}

export const deleteRecipe = (id) => {
  return {
    type: 'DELETE_RECIPE',
    id
  }
}
