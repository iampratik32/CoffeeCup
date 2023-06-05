const { check, error, lang } = require('./helper/imports')
const { TYPE, IMAGE, IS_ENABLED } = require('../../config/fieldsConfig.json')

exports.store = [
    check(TYPE).notEmpty().withMessage(lang.COFFEE_TYPE_EMPTY).bail(),
    check(IMAGE).notEmpty().withMessage(lang.COFFEE_TYPE_IMAGE_EMPTY).bail().custom(() => {
        return true
    }).withMessage(lang.ENTER_VALID_IMAGE).bail(),

    (req, res, next) => error(req, res, next)
]

exports.update = [
    check(TYPE).notEmpty().withMessage(lang.COFFEE_TYPE_EMPTY).bail(),
    check(IMAGE).optional().bail(),
    check(IS_ENABLED).notEmpty().withMessage(lang.COFFEE_TYPE_ENABLE_EMPTY).bail()
        .isBoolean().withMessage(lang.COFFEE_TYPE_ENABLE_VALID).bail(),

    (req, res, next) => error(req, res, next)
]