import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Grid } from 'react-bootstrap';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class BookView extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <Grid>
                <h1>GraphQL Starter Pack</h1>
                <h2>Select Book</h2>
                <BookList />
                <h2>Add Book</h2>
                <AddBook />
                <div style={{ marginTop: '5em' }}><a href='/'>Back to Welcome</a></div>
            </Grid>
        </ApolloProvider>
    );
  }
}

export default BookView;
