# GraphQL Starter Pack
This is a GraphQL Starter Pack for anyone looking to get a React/GraphQL/MongoDB proof of concept running quickly. In this example we will use books and authors.

Roadmap includes:
- Static type checking
- OAuth
- Redux
- Heroku and/or AWS integration with documentation

Based on iamshaunjp's `graphql-playlist` @ https://github.com/iamshaunjp/graphql-playlist

### Features
* React client side view for adding and viewing books
* Plug and play server set up for use with Mongo via mLab
* GraphQL query tool and queries to get started
* `http://localhost:4000/graphql` GraphQL Query Tool
* `http://localhost:3000/` Client Side Entry point

### Toolbox
React, Express, GraphQL, MongoDB, Mongoose, Apollo, Lodash, Bootstrap, React-Router, dotenv, and CORS

# Quick Start
1. `git clone https://github.com/christopherrobin/GraphQL-Starter-Pack.git`
2. `cd GraphQL-Starter-Pack && cd client && npm install`
3. Prepare your database
    - Create a sandbox Mongo DB instance in mLab
    - Insert database url/credentials into a `.env` in the root of the `server` folder
	ex: `DATABASEURL=mongodb://<dbuser>:<dbpassword>@ds233061.mlab.com:33061/<databasename>`
    - Create an author: Customize the _Add Author_ mutation from the _Helpful Queries_ section and insert data into our database using the GraphQL Query Tool
    - Continue to populate database with dummy data as you see fit
5. `nodemon app` from root of server folder
6. `npm start` from root of client folder

# Helpful Queries
### Add Author
```
mutation {
  addAuthor(name:"Author Name", age: 50){
    name
    age
  }
}
```

### Add Book
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

### GET author by authorId
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
