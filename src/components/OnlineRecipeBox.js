import React from 'react';
import {Jumbotron, PageHeader} from 'react-bootstrap';

import OnlineRecipeListContainer from '../containers/OnlineRecipeListContainer';

const OnlineRecipeBox = (props) => {
  return (
    <div>
      <PageHeader className="App-title">Online Recipe Box</PageHeader>
      <Jumbotron className="App-container">
        <OnlineRecipeListContainer />
      </Jumbotron>
    </div>
  );
};

export default OnlineRecipeBox;
