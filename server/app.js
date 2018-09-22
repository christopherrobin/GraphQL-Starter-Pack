const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect(process.env.DATABASEURL);
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
