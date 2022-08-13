const { INTEGER, STRING } = require('sequelize')
const db = require('../config/db')
const User = require('./User')

const UserPreference = db.define('UserPreference', {
    user_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    coffee: {
        type: STRING,
        allowNull: true
    },
    type: {
        allowNull: this.truncate,
        type: STRING
    }
}, { tableName: 'user_preferences' })

UserPreference.sync({ alter: false })

module.exports = UserPreference