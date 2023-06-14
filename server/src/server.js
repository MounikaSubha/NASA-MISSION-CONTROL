// as client is running on port 3000 already we can use port 8000 for server
// define port , 1. as process env varible so that we can pass the PORT number we want as an argument
// we can also  give default value to take from code 
const http = require('http')
const PORT = process.env.PORT || 8000;
const app = require('./app')
// we can start server using express and listen to PORT
//const express = require('express')
// const app = express();
// app.listen(PORT, () => {
//     console.log(PORT);
// })

// we use HTTP server instead of express server for decoupling of http for requests and express for middleware
// also to handle web socketing in future 
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
})   
