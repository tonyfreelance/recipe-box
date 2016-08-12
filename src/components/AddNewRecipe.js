/* eslint-disable */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import * as actions from '../actions/actions';

class AddNewRecipe extends Component {
  state = {
    showModal: false,
    name: '',
    ingredients: ''
  }

  addRecipe = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    const {name, ingredients} = this.state;

    if(name.length > 0) {
      ReactDOM.findDOMNode(this.name).value = '';
      ReactDOM.findDOMNode(this.ingredients).value = '';
      dispatch(actions.startAddRecipe(name, ingredients));
      this.setState({showModal: false});
    } else {
      ReactDOM.findDOMNode(this.name).focus();
    }
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  render() {
    return (
      <div>
        <Button bsStyle="success" bsSize="large" onClick={this.openModal}>Add Recipe</Button>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Recipe</Modal.Title>
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
            <Button bsStyle="success" onClick={this.addRecipe}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect()(AddNewRecipe);
