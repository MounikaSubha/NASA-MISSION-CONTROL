// this is the component where all the routes to different end points are exposed and are exported 
// to app.js 
const {
    getAllPlanets,
} = require('./planets-controller')

const express = require('express')
const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter;