const { STRING, INTEGER, TEXT } = require('sequelize')
const db = require('../config/db')
const Store = require('./Store')
const User = require('./User')

const Report = db.define('reports', {
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
    report: {
        allowNull: true,
        type: TEXT
    },
    report_types: {
        allowNull: true,
        type: STRING
    }
}, { tableName: 'reports' })

User.hasMany(Report, { foreignKey: 'user_id' })
Report.belongsTo(User, { foreignKey: 'user_id' })

Store.hasMany(Report, { foreignKey: 'store_id' })
Report.belongsTo(Store, { foreignKey: 'store_id' })

Report.sync({ alter: false })

module.exports = Report