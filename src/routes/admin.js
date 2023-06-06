const express = require('express')
const routes = express.Router()
const { COFFEE_TYPE, COFFEE_TYPE_UID } = require('../config/routesConfig.json')

//Controllers
const AdminController = require('../controllers/admin/AdminController')
const CoffeeTypeController = require('../controllers/admin/CoffeeTypeController')

// Validators
const CoffeeTypeValidator = require('../middlewares/validators/CoffeeTypeValidator')

module.exports = () => {

    routes.get('/', AdminController.index)

    // Coffee Type
    routes.get(COFFEE_TYPE, CoffeeTypeController.index)
    routes.get(COFFEE_TYPE_UID, CoffeeTypeController.show)
    routes.post(COFFEE_TYPE, CoffeeTypeValidator.store, CoffeeTypeController.store)
    routes.put(COFFEE_TYPE, CoffeeTypeValidator.update, CoffeeTypeController.update)
    routes.delete(COFFEE_TYPE, CoffeeTypeValidator.destroy, CoffeeTypeController.destroy)
    //TODO:: Validate These Routes Again. 

    

    return routes
}