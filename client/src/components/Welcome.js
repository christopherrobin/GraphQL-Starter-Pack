import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Welcome extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>GraphQL Starter Pack</h1>
            <p>This is a GraphQL Starter Pack for anyone looking to get a React/GraphQL/MongoDB
            proof of concept running quickly. In this example we will use books and authors.</p>
            <a href='https://github.com/christopherrobin/GraphQL-Starter-Pack' target='blank'>
              https://github.com/christopherrobin/GraphQL-Starter-Pack
            </a>
          </Col>
        </Row>
        <Row style={{ marginTop: '2em' }}>
          <Col>
            <Button bsStyle='primary' href='/books' style={{ width: '100%', marginBottom: '1em' }}>Book List</Button>
            <Button bsStyle='primary' href='http://localhost:4000/graphql' target='blank' style={{ width: '100%' }}>GraphQL Query Tool</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Welcome;
