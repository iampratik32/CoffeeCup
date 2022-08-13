const { STRING, INTEGER } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')

const StoreImage = db.define('StoreImage', {
    store_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'stores',
            key: 'id'
        }
    },
    image: {
        type: STRING,
        allowNull: false
    },
    index: {
        allowNull: false,
        defaultValue: 0,
        type: INTEGER
    }
}, { tableName: 'store_images' })

StoreImage.sync({ alter: false })

Store.hasMany(StoreImage, { foreignKey: 'store_id' })
StoreImage.belongsTo(Store, { foreignKey: 'store_id' })

module.exports = StoreImage