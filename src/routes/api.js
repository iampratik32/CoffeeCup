const express = require('express')
const routes = express.Router()

const ApiController = require('../controllers/ApiController')
const RegisterController = require('../controllers/auth/RegisterController')

const AuthValidator = require('../middlewares/validators/AuthValidator')

module.exports = () => {
    routes.get('/', ApiController.index)

    routes.post('/register', AuthValidator.register, RegisterController.store)

    return routes
}