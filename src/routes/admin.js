const express = require('express')
const routes = express.Router()

const AdminController = require('../controllers/admin/AdminController')

module.exports = () => {
    routes.get('/', AdminController.index)
    return routes
}