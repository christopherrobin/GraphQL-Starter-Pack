import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import { Button } from 'react-bootstrap';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
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
