import { connect } from 'react-redux';
import LocalRecipeList from '../components/LocalRecipeList';
import {startDeleteRecipe} from '../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (id) => {
      dispatch(startDeleteRecipe(id));
    }
  };
};

const LocalRecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalRecipeList);

export default LocalRecipeListContainer;
