const { BOOLEAN, STRING } = require('sequelize')
const db = require('../config/db')

const User = db.define('User', {
    name: {
        type: STRING,
        allowNull: false
    },
    email: {
        allowNull: false,
        type: STRING,
        unique: true
    },
    phone: {
        allowNull: false,
        type: STRING({ length: 20 }),
        unique: true
    },
    password: {
        allowNull: false,
        type: STRING
    },
    role: {
        allowNull: false,
        defaultValue: 'User',
        validate: {
            isIn: [['User', 'Admin']]
        },
        type: STRING
    },
    access_token: {
        type: STRING,
        allowNull: true,
        unique: true
    },
    email_verified: {
        allowNull: false,
        defaultValue: false,
        type: BOOLEAN
    },
    phone_verified: {
        allowNull: false,
        defaultValue: false,
        type: BOOLEAN
    },
    blocked: {
        allowNull: false,
        defaultValue: false,
        type: BOOLEAN
    },
    image: {
        allowNull: true,
        type: STRING
    }
}, { tableName: 'users' })

User.sync({ alter: false })

module.exports = User