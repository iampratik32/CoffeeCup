const { STRING, INTEGER } = require('sequelize')
const db = require('../config/db')
const Feature = require('./Feature')
const Store = require('./Store')

const StoreFeature = db.define('StoreFeature', {
    store_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'stores',
            key: 'id'
        }
    },
    feature_id: {
        allowNull: false,
        type: INTEGER,
        references: {
            model: 'features',
            key: 'id'
        }
    }
}, { tableName: 'store_features' })

StoreFeature.sync({ alter: false })

Store.hasMany(StoreFeature, { foreignKey: 'store_id' })
StoreFeature.belongsTo(Store, { foreignKey: 'store_id' })

Feature.hasMany(StoreFeature, {foreignKey: 'feature_id'})
StoreFeature.belongsTo(Feature, {foreignKey: 'feature_id'})

module.exports = StoreFeature