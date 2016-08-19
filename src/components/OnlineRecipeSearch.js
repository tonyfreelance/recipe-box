import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import '../styles/OnlineRecipeSearch.css';
import OnlineRecipeSearchResults from './OnlineRecipeSearchResults';

class OnlineRecipeSearch extends React.Component {
  searchRecipe = (e) => {
    e.preventDefault();
    const query = ReactDOM.findDOMNode(this.search);
    const { dispatch } = this.props;

    if(query === '') {
        query.focus();
    } else {
      dispatch(actions.startSearchRecipe(query.value));
    }
  }
  render() {
    return (
      <div>
        <h3>Recipe search:</h3>
        <Form inline>
          <FormGroup className="recipes-search">
            <FormControl
              type="text"
              placeholder="Enter recipe name"
              ref={ref => this.search = ref} // eslint-disable-line no-return-assign
            />
          </FormGroup>
          <Button
            type="submit"
            onClick={this.searchRecipe}
          >
            Search
          </Button>
        </Form>
        <OnlineRecipeSearchResults />
      </div>
    );
  }
}

export default connect()(OnlineRecipeSearch);
