const { STRING, INTEGER, BOOLEAN, TEXT } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')
const User = require('./User')

const Review = db.define('Review', {
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
    review: {
        allowNull: true,
        type: TEXT
    },
    rating: {
        allowNull: false,
        type: INTEGER,
        defaultValue: 1,
        validate: {
            isIn: [[1, 2, 3, 4, 5]]
        }
    },
    recommended: {
        allowNull: false,
        defaultValue: true,
        type: BOOLEAN
    }
}, { tableName: 'reviews' })

User.hasMany(Review, { foreignKey: 'user_id' })
Review.belongsTo(User, { foreignKey: 'user_id' })

Store.hasMany(Review, { foreignKey: 'store_id' })
Review.belongsTo(Store, { foreignKey: 'store_id' })

Review.sync({ alter: false })

module.exports = Review