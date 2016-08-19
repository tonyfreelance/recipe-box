import { connect } from 'react-redux';
import OnlineRecipeList from '../components/OnlineRecipeList';
import {startDeleteRecipe} from '../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (id) => {
      dispatch(startDeleteRecipe(id));
    }
  };
};

const OnlineRecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OnlineRecipeList);

export default OnlineRecipeListContainer;
