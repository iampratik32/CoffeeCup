const { INTEGER } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')
const User = require('./User')

const UserVisit = db.define('UserVisit', {
    store_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'stores',
            key: 'id'
        }
    },
    user_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, { tableName: 'user_visits' })

User.hasMany(UserVisit, { foreignKey: 'user_id' })
UserVisit.belongsTo(User, { foreignKey: 'user_id' })

Store.hasMany(UserVisit, { foreignKey: 'store_id' })
UserVisit.belongsTo(Store, { foreignKey: 'store_id' })

UserVisit.sync({ alter: false })

module.exports = UserVisit