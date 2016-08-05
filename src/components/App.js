import React from 'react';
import {Navbar, Nav, NavItem, Grid, Row, Col, Jumbotron, PageHeader} from 'react-bootstrap';

import '../styles/App.css';
import RecipeList from './RecipeList';
import AddNewRecipe from './AddNewRecipe';

function App() {
  return (
    <div>
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Recipe Box</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#" active>Home</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/login">Log In</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <PageHeader className="App-title">Hanoian Restaurant</PageHeader>
            <Jumbotron className="App-container">
              <RecipeList />
            </Jumbotron>
            <AddNewRecipe />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
