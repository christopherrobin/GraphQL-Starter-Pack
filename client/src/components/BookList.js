import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import { Button, Alert } from 'react-bootstrap';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks(){
        const data = this.props.data;
        const { loading, error } = data;
        if(loading){
            return( <div>Loading books...</div> );
        } else if (error && !loading) {
            console.error(error.message);
            return (<Alert variant="danger" className="alert-danger"><h4>Error</h4>{error.message}</Alert>)
        } else if (!error.message) {
            return data.books.map(book => {
                return(
                    <Button
                        key={book.id}
                        className="book-listing-button"
                        onClick={(e) => this.setState({ selected: book.id })}>
                        {book.name}
                    </Button>
                );
            })
        }
    }

    render(){
        return(
            <div>
                <BookDetails bookId={this.state.selected} />
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
