const { INTEGER } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')
const User = require('./User')

const UserLike = db.define('UserLike', {
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
}, { tableName: 'user_likes' })

User.hasMany(UserLike, { foreignKey: 'user_id' })
UserLike.belongsTo(User, { foreignKey: 'user_id' })

Store.hasMany(UserLike, { foreignKey: 'store_id' })
UserLike.belongsTo(Store, { foreignKey: 'store_id' })

UserLike.sync({ alter: false })

module.exports = UserLike