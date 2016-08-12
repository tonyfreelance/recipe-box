import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import '../styles/App.css';
import NavBar from './NavBar';

function App(props) {
  return (
    <div>
      <NavBar />
      <Grid>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            {props.children}
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
