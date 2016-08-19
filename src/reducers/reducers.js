const recipe = (state, action) => {
    switch (action.type) {
        case 'ADD_SEARCH_RECIPE':
        case 'ADD_RECIPE':
            return action.recipe;
        case 'EDIT_RECIPE':
            if (state.id === action.recipe.id) {
                return {
                    ...state,
                    name: action.recipe.name,
                    ingredients: action.recipe.ingredients
                }
            } else {
                return state;
            }
        case 'DELETE_RECIPE':
            return state.id !== action.id;
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
        case 'ADD_SEARCH_RECIPE':
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
            return state.filter(r => recipe(r, action));
        default:
            return state;
    }
}

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}

export const searchRecipesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_RECIPE':
            const recipes = action.recipes.map(r => {
              r.image = action.baseUrl + r.image;
              return r;
            });
            return [
              ...state,
              ...recipes
            ];
        default:
            return state;
    }
}
