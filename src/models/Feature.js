const { STRING } = require('sequelize')
const db = require('../config/db')

const Feature = db.define('Feature', {
    feature: {
        allowNull: false,
        type: STRING({ length: 30 })
    },
    image: {
        allowNull: false,
        type: STRING
    }
}, { tableName: 'features' })

Feature.sync({ alter: false })

module.exports = Feature