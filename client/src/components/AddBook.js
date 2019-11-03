import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { Button, FormGroup, ControlLabel, FormControl, select } from 'react-bootstrap';
import _ from 'lodash';

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }

    submitForm(e){
        e.preventDefault()
        // use the addBookMutation
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
            </FormGroup>
        );
    }

    render(){
        return(
            <form id="add-book">
                <this.FieldGroup
                    id="add-book-name"
                    type="text"
                    label="Book Name"
                    placeholder="Book Name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <this.FieldGroup
                    id="add-book-genre"
                    type="text"
                    label="Genre"
                    placeholder="Genre"
                    onChange={(e) => this.setState({ genre: e.target.value })}
                />
                <select
                    className="form-control form-control-sm"
                    onChange={(e) => this.setState({ authorId: e.target.value })}
                >
                    <option>Select author</option>
                    {this.displayAuthors()}
                </select>
                <Button
                    bsStyle="primary" style={{ marginTop: '1em' }}
                    onClick={this.submitForm.bind(this)}>
                Add
                </Button>
            </form>
        );
    }
}

export default _.flowRight(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
