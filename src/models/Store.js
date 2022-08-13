const { TEXT, INTEGER, BOOLEAN, STRING } = require('sequelize')
const db = require('../config/db')

const Store = db.define('Store', {
    name: {
        type: STRING,
        allowNull: false
    },
    uId: {
        type: STRING,
        unique: true,
        allowNull: false
    },
    location: {
        type: STRING,
        allowNull: true,
        unique: true
    },
    address: {
        type: STRING,
        allowNull: false
    },
    status: {
        allowNull: false,
        type: STRING,
        defaultValue: 'Opened',
        validate: {
            isIn: [['Opened', 'Closed']]
        }
    },
    phone: {
        allowNull: false,
        unique: true,
        type: STRING({ length: 20 })
    },
    instagram: {
        allowNull: false,
        type: STRING,
        unique: true
    },
    editor_review: {
        allowNull: true,
        type: TEXT
    },
    review: {
        allowNull: false,
        type: TEXT
    },
    rating: {
        allowNull: false,
        defaultValue: 0,
        type: INTEGER
    },
    image: {
        allowNull: false,
        type: STRING
    },
    city: {
        allowNull: false,
        type: STRING,
        defaultValue: 'Kathmandu'
    },
    country: {
        allowNull: false,
        type: STRING,
        defaultValue: 'Nepal'
    }
}, { tableName: 'stores' })

Store.sync({ alter: false })

module.exports = Store