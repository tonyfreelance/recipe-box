import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { hashHistory } from 'react-router';

import * as actions from '../actions/actions';

class OnlineRecipeSearchResults extends React.Component {
  viewDetails = (id) => {
    console.log(id);
    // hashHistory.push(`/online-recipes/${id}`);
    // window.location = `/online-recipes/${id}`;
  }

  render() {
    return (
      <Grid>
        <Row>
          {this.props.searchRecipes.map(recipe => {
            return (
              <Col xs={6} md={4} key={recipe.id}>
                <LinkContainer to={`/online-recipes/${recipe.id}`}>
                  <Thumbnail src={recipe.image} alt={recipe.title} onClick={() => this.viewDetails(recipe.id)}>

                    <p style={{textAlign: 'center'}}>{recipe.title}</p>
                  </Thumbnail>
                </LinkContainer>
              </Col>
            );
          })}
        </Row>
        <div className="detail">
          {this.props.children}
        </div>
      </Grid>

    );
  }
}

export default connect(state => state)(OnlineRecipeSearchResults);
