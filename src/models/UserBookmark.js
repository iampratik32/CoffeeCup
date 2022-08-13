const { INTEGER } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')
const User = require('./User')

const UserBookmark = db.define('UserBookmark', {
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
}, { tableName: 'user_bookmarks' })

User.hasMany(UserBookmark, { foreignKey: 'user_id' })
UserBookmark.belongsTo(User, { foreignKey: 'user_id' })

Store.hasMany(UserBookmark, { foreignKey: 'store_id' })
UserBookmark.belongsTo(Store, { foreignKey: 'store_id' })

UserBookmark.sync({ alter: false })

module.exports = UserBookmark