const { INTEGER, STRING, BOOLEAN } = require('sequelize')
const db = require('../config/db')
const User = require('./User')

const UserSuggestion = db.define('UserSuggestion', {
    user_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    country: {
        type: STRING,
        defaultValue: 'Nepal',
        allowNull: false
    },
    city: {
        allowNull: false,
        defaultValue: 'Kathmandu',
        type: STRING
    },
    store_name: {
        allowNull: false,
        type: STRING
    },
    show_name: {
        allowNull: false,
        defaultValue: false,
        type: BOOLEAN
    },
    address: {
        type: STRING,
        allowNull: false
    }
}, { tableName: 'user_suggestions' })

UserSuggestion.sync({ alter: false })

User.hasMany(UserSuggestion, { foreignKey: 'user_id' })
UserSuggestion.belongsTo(User, { foreignKey: 'user_id' })

module.exports = UserSuggestion