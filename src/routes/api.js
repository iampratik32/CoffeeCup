const express = require('express')
const routes = express.Router()

const ApiController = require('../controllers/ApiController')

module.exports = () => {
    routes.get('/', ApiController.index)
    return routes
}