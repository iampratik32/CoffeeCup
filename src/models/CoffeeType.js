const { STRING } = require('sequelize')
const db = require('../config/db')

const CoffeeType = db.define('CoffeeType', {
    type: {
        allowNull: false,
        type: STRING({ length: 30 })
    },
    image: {
        allowNull: false,
        type: STRING
    }
}, { tableName: 'coffee_types' })

CoffeeType.sync({ alter: false })

module.exports = CoffeeType