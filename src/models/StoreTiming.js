const { INTEGER, STRING } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')

const StoreTiming = db.define('StoreTiming', {
    store_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'stores',
            key: 'id'
        }
    },
    day: {
        type: STRING({ length: 3 }),
        allowNull: false,
        validate: {
            isIn: [['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']]
        }
    },
    time: {
        type: STRING({ length: 20 }),
        allowNull: false
    }
}, { tableName: 'store_timings' })

StoreTiming.sync({ alter: false })

Store.hasMany(StoreTiming, { foreignKey: 'store_id' })
StoreTiming.belongsTo(Store, { foreignKey: 'store_id' })

module.exports = StoreTiming