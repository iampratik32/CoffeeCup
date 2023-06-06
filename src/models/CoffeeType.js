const { STRING } = require('sequelize')
const db = require('../config/db')
const { BOOLEAN } = require('sequelize')
const { serverError, dataSuccess, blankSuccess, notFoundError } = require('../utilities/reponses')
const randomstring = require('randomstring')

const CoffeeType = db.define('CoffeeType', {
    uId: {
        allowNull: false,
        type: STRING({ length: 30 }),
        unique: true
    },
    type: {
        allowNull: false,
        type: STRING({ length: 30 })
    },
    image: {
        allowNull: false,
        type: STRING
    },
    isEnabled: {
        allowNull: false,
        type: BOOLEAN,
        defaultValue: false
    }
}, { tableName: 'coffee_types' })

CoffeeType.sync({ alter: true })

const getAllCoffeeTypes = async (res) => {
    return await CoffeeType.findAll().catch(err => serverError(res, err))
}

const getCoffeeTypeByStatus = async (res, isEnabled) => {
    return await CoffeeType.findAll({ where: { isEnabled: isEnabled } }).catch(err => serverError(res, err))
}

const getCoffeeType = async (res, uId) => {
    return await CoffeeType.findOne({ where: { uId: uId } }).catch(err => serverError(res, err))
}

const storeCoffeeType = async (res, coffeeType) => {
    coffeeType.uId = randomstring.generate(13)
    return await CoffeeType.build(coffeeType).save().catch(err => serverError(res, err))
}

const updateCoffeeType = async (res, coffeeType) => {
    return await coffeeType.save().catch(err => serverError(res, err))
}

const deleteCoffeeType = async (res, uId) => {
    let coffeeType = await getCoffeeType(res, uId)
    return await coffeeType.destroy().catch(err => serverError(res, err))
}

module.exports = { CoffeeType, getAllCoffeeTypes, getCoffeeTypeByStatus, storeCoffeeType, getCoffeeType, updateCoffeeType, deleteCoffeeType }