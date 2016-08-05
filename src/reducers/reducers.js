import uuid from 'uuid';

const recipe = (state, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {
                id: uuid(),
                name: action.name,
                ingredients: action.ingredients
            };
        case 'EDIT_RECIPE':
            if (state.id === action.recipe.id) {
                return {
                    ...recipe,
                    name: state.recipe.name,
                    ingredients: state.recipe.ingredients
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}

export const recipesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return [
                ...state,
                recipe(undefined, action)
            ];
        case 'ADD_RECIPES':
            return [
                ...state,
                ...action.recipes
            ];
        case 'EDIT_RECIPE':
            return state.map(r => recipe(r, action));
        case 'DELETE_RECIPE':
            {
                return state.filter(recipe => recipe.id !== action.id);
            }
        default:
            return state;
    }
}
