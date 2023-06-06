const { check, error, lang } = require('./helper/imports')
const { TYPE, IMAGE, IS_ENABLED, UID } = require('../../config/fieldsConfig.json')
const { getCoffeeType } = require('../../models/CoffeeType')

// TODO:: Add A Validator To Upload Valid Images.
exports.store = [
    check(TYPE).notEmpty().withMessage(lang.COFFEE_TYPE_EMPTY).bail(),
    check(IMAGE).notEmpty().withMessage(lang.COFFEE_TYPE_IMAGE_EMPTY).bail().custom(() => {
        return true
    }).withMessage(lang.ENTER_VALID_IMAGE).bail(),

    (req, res, next) => error(req, res, next)
]

exports.update = [
    check(UID).notEmpty().withMessage(lang.UID_NOT_EMPTY).bail().custom((v, res) => {
        getCoffeeType(res, v).then(coffeeType => {
            if (coffeeType == null) Promise.reject()
            else return true
        })
    }).withMessage(lang.UID_NOT_FOUND).bail(),
    check(TYPE).notEmpty().withMessage(lang.COFFEE_TYPE_EMPTY).bail(),
    check(IMAGE).optional().bail(),
    check(IS_ENABLED).notEmpty().withMessage(lang.COFFEE_TYPE_ENABLE_EMPTY).bail()
        .isBoolean().withMessage(lang.COFFEE_TYPE_ENABLE_VALID).bail(),

    (req, res, next) => error(req, res, next)
]

exports.destroy = [
    check(UID).notEmpty().withMessage(lang.UID_NOT_EMPTY).bail().custom((v, res) => {
        getCoffeeType(res, v).then(coffeeType => {
            if (coffeeType == null) Promise.reject()
            else return true
        })
    }).withMessage(lang.UID_NOT_FOUND).bail(),

    (req, res, next) => error(req, res, next)
]