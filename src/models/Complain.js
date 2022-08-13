const { STRING, INTEGER, TEXT } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')
const User = require('./User')

const Complain = db.define('Complain', {
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
    },
    complain: {
        allowNull: true,
        type: TEXT
    },
    coffee_type: {
        allowNull: true,
        type: STRING
    },
    store_features: {
        allowNull: false,
        type: STRING
    }
}, { tableName: 'complains' })

User.hasMany(Complain, { foreignKey: 'user_id' })
Complain.belongsTo(User, { foreignKey: 'user_id' })

Store.hasMany(Complain, { foreignKey: 'store_id' })
Complain.belongsTo(Store, { foreignKey: 'store_id' })

Complain.sync({ alter: false })

module.exports = Complain