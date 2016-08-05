import $ from 'jquery';

export default {
  setLocalStorage(recipes) {
    if ($.isArray(recipes)) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
    return recipes;
  },
  getLocalStorage() {
    const stringRecipes = localStorage.getItem('recipes');
    let recipes = [];
    try {
      recipes = JSON.parse(stringRecipes);
    } catch (e) {}
    return $.isArray(recipes) ? recipes : [];
  },
};
