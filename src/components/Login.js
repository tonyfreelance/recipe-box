import React, { Component } from 'react';
import { PageHeader, Jumbotron, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import '../styles/Login.css';
import * as actions from '../actions/actions';

class Login extends Component {
  loginGithub = () => {
    const { dispatch } = this.props;
    dispatch(actions.startLoginGithub());
  }

  loginTwitter = () => {
    const { dispatch } = this.props;
    dispatch(actions.startLoginTwitter());
  }

  render() {
    return (
      <div>
        <PageHeader className="Login-title">Recipe Box</PageHeader>
        <Jumbotron className="Login-container ">
          <p>Log in with one of the accounts below</p>
          <Button bsStyle="success" bsSize="large" onClick={this.loginGithub} className="Login-github">
            <i className="fa fa-github" aria-hidden="true"></i> Login with GitHub
          </Button>
          <br/>
          <Button bsStyle="info" bsSize="large" onClick={this.loginTwitter}>
            <i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter
          </Button>
        </Jumbotron>
      </div>
    );
  }
}

export default connect()(Login);
