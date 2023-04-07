const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
// import { createHandler } from 'graphql-http/lib/use/express';
const schema = require('./schema')


const app = express();
app.all('/graphql', createHandler({ schema }));

const port = 3000
// const port = process.env.PORT;

app.listen(port, () => {
    console.log(port)
});

console.log(`running server at ${ port }`)