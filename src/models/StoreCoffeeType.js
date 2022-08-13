const { STRING, INTEGER } = require('sequelize')
const db = require('../config/db')
const CoffeeType = require('./CoffeeType')
const Store = require('./Store')

const StoreCoffeeType = db.define('StoreCoffeeType', {
    store_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'stores',
            key: 'id'
        }
    },
    type_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'coffee_types',
            key: 'id'
        }
    }
}, { tableName: 'store_coffee_types' })

StoreCoffeeType.sync({ alter: false })

Store.hasMany(StoreCoffeeType, { foreignKey: 'store_id' })
StoreCoffeeType.belongsTo(Store, { foreignKey: 'store_id' })

CoffeeType.hasMany(StoreCoffeeType, { foreignKey: 'type_id' })
StoreCoffeeType.belongsTo(CoffeeType, { foreignKey: 'type_id' })

module.exports = StoreCoffeeType