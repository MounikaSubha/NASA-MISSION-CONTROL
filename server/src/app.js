// this can be used to write all the middleware code 
const express = require('express');
const planetsRouter = require('./routes/planets/planets-router');
const app = express();
app.use(planetsRouter)
module.exports = app;