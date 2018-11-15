import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class NotFound extends Component {
  render() {
    return (
      <Grid style={{ textAlign: 'center', marginTop: '3em' }}>
        <h1>404</h1>
        <h2>Not Found</h2>
      </Grid>
    );
  }
}

export default NotFound;
