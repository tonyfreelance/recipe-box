import moment from 'moment';

import firebase, {
    firebaseRef,
    githubProvider,
    twitterProvider
} from '../firebase/index';

export const addRecipe = (recipe) => {
    return {
        type: 'ADD_RECIPE',
        recipe
    }
}

export const startAddRecipe = (name, ingredients) => {
    return (dispatch, getState) => {
        const recipe = {
            name,
            ingredients,
            createdAt: moment().unix()
        };
        const uid = getState().auth.uid;
        const recipeRef = firebaseRef.child(`users/${uid}/local-recipes`).push(recipe);

        return recipeRef.then(() => {
            dispatch(addRecipe({
                ...recipe,
                id: recipeRef.key
            }));
        });
    };
}

export const addSearchRecipe = (recipe) => {
  return {
    type: 'ADD_SEARCH_RECIPE',
    recipe
  };
}

export const startAddSearchRecipe = (name) => {
  return (dispatch, getState) => {
    const recipe = {
      name,
      createdAt: moment().unix()
    };
    const uid = getState().auth.uid;
    const recipeRef = firebaseRef.child(`users/${uid}/online-recipes`).push(recipe);

    return recipeRef.then(() => {
      dispatch(addSearchRecipe({
        ...recipe,
        id: recipeRef.id
      }));
    });
  };
}

export const addRecipes = (recipes) => {
    return {
        type: 'ADD_RECIPES',
        recipes
    }
}

export const startAddRecipes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const recipesRef = firebaseRef.child(`users/${uid}/local-recipes`);

        return recipesRef.once('value')
            .then((snapshot) => {
                const recipes = snapshot.val() || {};
                let parsedRecipes = [];

                Object.keys(recipes).forEach((recipeId) => {
                    parsedRecipes.push({
                        id: recipeId,
                        ...recipes[recipeId]
                    });
                });

                dispatch(addRecipes(parsedRecipes));
            });
    };
}

export const editRecipe = (recipe) => {
    return {
        type: 'EDIT_RECIPE',
        recipe
    }
}

export const startEditRecipe = (recipe) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const recipeRef = firebaseRef.child(`users/${uid}/local-recipes/${recipe.id}`);
        const updatedRecipe = {
            name: recipe.name,
            ingredients: recipe.ingredients
        };

        return recipeRef.update(updatedRecipe)
            .then(() => {
                dispatch(editRecipe(recipe));
            });
    };
}

export const deleteRecipe = (id) => {
    return {
        type: 'DELETE_RECIPE',
        id
    }
}

export const startDeleteRecipe = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const recipeRef = firebaseRef.child(`users/${uid}/local-recipes/${id}`);

        return recipeRef.remove()
            .then(() => {
                dispatch(deleteRecipe(id));
            });
    };
}

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
}

export const startLoginGithub = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubProvider)
            .then((result) => {
                console.log('Login successfully: ', result);
            })
            .catch((err) => {
                console.log('Signin Error: ', err);
            });
    };
}

export const startLoginTwitter = () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterProvider)
            .then((result) => {
                console.log('Login successfully: ', result);
            })
            .catch((err) => {
                console.log('Signin Error: ', err);
            });
    };
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
            .then(() => {
                console.log('Sign out successfully');
            }, (err) => {
                console.log('Signout error: ', err);
            })
    };
}

export const searchRecipe = (recipes, baseUrl) => {
    return {
        type: 'SEARCH_RECIPE',
        recipes,
        baseUrl
    }
}

export const startSearchRecipe = (query) => {
    return (dispatch) => {
        const request = new Request(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?limitLicense=false&number=15&offset=0&query=${query}`, {
            method: 'GET',
            headers: new Headers({
                'X-Mashape-Key': '8fTSK4MSKrmsh7dvP7p6wazY0ISYp1IBnXsjsnOh53T5aVX28b'
            })
        });

        return fetch(request)
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    const error = new Error(`HTTP Error ${response.statusText}`);
                    error.status = response.statusText;
                    error.response = response;
                    console.log(error); // eslint-disable-line no-console
                    throw error;
                }
            })
            .then((response) => {
              console.log(response);
              dispatch(searchRecipe(response.results, response.baseUri));
            });
    };
}
