import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class NavBar extends React.Component {
  logout = () => {
    const { dispatch } = this.props;
    dispatch(actions.startLogout());
  }

  render() {
    const showLogout = () => {
      if(this.props.auth.uid) {
        return (
          <Nav pullRight>
            <NavItem eventKey={3} href="#" onClick={this.logout}>Log out</NavItem>
          </Nav>
        );
      }
    };

    return (
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Recipe Box</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/local-recipes">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/online-recipes">
              <NavItem eventKey={2}>Search</NavItem>
            </LinkContainer>
          </Nav>
          {showLogout()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default connect(state => state)(NavBar);
