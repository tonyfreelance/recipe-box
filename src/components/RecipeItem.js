/* eslint-disable */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Accordion, Panel, ListGroup, ListGroupItem, Button, ButtonGroup, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import {deleteRecipe, startEditRecipe} from '../actions/actions';

class RecipeItem extends Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.string.isRequired
  }

  state = {
    showModal: false,
    name: this.props.name,
    ingredients: this.props.ingredients
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  editRecipe = () => {
    const {name, ingredients} = this.state;
    const {dispatch} = this.props;

    let recipe = {
      id: this.props.id,
      name,
      ingredients
    };

    if(name.length > 0) {
      ReactDOM.findDOMNode(this.name).value = '';
      ReactDOM.findDOMNode(this.ingredients).value = '';
      dispatch(startEditRecipe(recipe));
      this.setState({showModal: false});
    } else {
      ReactDOM.findDOMNode(this.name).focus();
    }
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  render() {
    const {id, name, ingredients, deleteRecipe} = this.props;

    return (
      <Accordion>
        <Panel header={name} eventKey={id}  bsStyle="success">
          <h3 className="text-center">Ingredients</h3>
          <hr/>
          <ListGroup>
            {ingredients.split(',').map((ingredient, index) => <ListGroupItem key={index}>{ingredient}</ListGroupItem>)}
          </ListGroup>
          <ButtonGroup>
            <Button bsStyle="danger" onClick={deleteRecipe}>Delete</Button>
            <Button onClick={this.openModal}>Edit</Button>
          </ButtonGroup>
          {/* Edit Form start */}
          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup
                  controlId="recipeName"
                >
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Enter recipe name"
                    onChange={e => this.setState({name: e.target.value})}
                    ref={ref => this.name = ref}
                  />
                </FormGroup>
                <FormGroup
                  controlId="recipeIngredients"
                >
                  <ControlLabel>Ingredients</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.ingredients}
                    placeholder="Enter recipe ingredients"
                    onChange={e => this.setState({ingredients: e.target.value})}
                    ref={ref => this.ingredients = ref}
                  />
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeModal}>Close</Button>
              <Button bsStyle="success" onClick={this.editRecipe}>Save</Button>
            </Modal.Footer>
          </Modal>
          {/* Edit Form end */}
        </Panel>
      </Accordion>
    );
  }
}
RecipeItem = connect()(RecipeItem);

export default RecipeItem;
