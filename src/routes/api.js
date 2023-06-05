const express = require('express')
const routes = express.Router()
const {BASE, LOGIN, REGISTER} = require('../config/routesConfig.json')

const ApiController = require('../controllers/ApiController')
const RegisterController = require('../controllers/auth/RegisterController')
const LoginController = require('../controllers/auth/LoginController')

const AuthValidator = require('../middlewares/validators/AuthValidator')

module.exports = () => {
    routes.get(BASE, ApiController.index)

    // routes.post(REGISTER, AuthValidator.register, RegisterController.store)
    // routes.post(LOGIN, AuthValidator.login, LoginController.login)

    return routes
}