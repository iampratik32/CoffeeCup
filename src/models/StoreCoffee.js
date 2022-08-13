const { STRING, INTEGER } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')

const StoreCoffee = db.define('StoreCoffee', {
    store_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'stores',
            key: 'id'
        }
    },
    roaster: {
        allowNull: true,
        type: STRING({ length: 30 })
    },
    grinder: {
        allowNull: true,
        type: STRING({ length: 30 })
    },
    coffee_machine: {
        allowNull: true,
        type: STRING({ length: 30 })
    },
}, { tableName: 'store_coffees' })

StoreCoffee.sync({ alter: false })

Store.hasMany(StoreCoffee, { foreignKey: 'store_id' })
StoreCoffee.belongsTo(Store, { foreignKey: 'store_id' })

module.exports = StoreCoffee