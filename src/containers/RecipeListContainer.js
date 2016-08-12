import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import {startDeleteRecipe} from '../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (id) => {
      dispatch(startDeleteRecipe(id));
    }
  };
};

const RecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export default RecipeListContainer;
