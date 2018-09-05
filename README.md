# GraphQL Starter Pack
This is a starter pack for anyone looking to get a React/GraphQL/MongoDB proof of concept running quickly. Preliminary roadmap includes better documentation, dotenv setup for secrets, static type checking, Babel, Redux, hot module reloading, and Heroku integration.

Based on iamshaunjp's `graphql-playlist` @ https://github.com/iamshaunjp/graphql-playlist

### Toolbox
React, Express, GraphQL, MongoDB, Mongoose, Apollo, Lodash, and CORS

### Get Started Quick
* Clone GraphQL-Starter-Pack repository onto your local hard drive
* `npm install` all the things (_should create node_modules and package lock files_)
* Create a sandbox Mongo DB instance and insert your credentials in `server/app.js`
* Use the GraphQL Query Tool to run them
* `nodemon app` from root of server folder
* `npm start` from root of client folder

### Features
* React client side view for adding and viewing books
* Plug and play server set up for use with Mongo via mLab
* GraphQL query tool and queries to get started

### Quick Links
* `http://localhost:3000/` Client Side Entry point
* `http://localhost:4000/graphql` GraphQL Query Tool

### Helpful Queries
#### Add Author
```
mutation {
  addAuthor(name:"Author Name", age: 50){
    name
    age
  }
}
```

#### Add Book
```
mutation {
  addBook(
    name: "Book Title",
    genre: "Genre",
    authorId: "<authors id string from mongo db>"){
  		name
  		genre
		}
}
```

#### GET author by authorId
```
{
  author(id:2){
    name
    age
    books{
      name
      genre
    }
  }
}
```
