const { EMAIL, PASSWORD, NAME, PHONE } = require('../../config/fieldsConfig.json')
const { check, error, lang } = require('./helper/imports')

exports.register = [
    check(EMAIL).notEmpty().withMessage(lang.EMAIL_EMPTY).bail()
        .isEmail().withMessage(lang.EMAIL_VALID).bail(),
    check(PASSWORD).notEmpty().withMessage(lang.PASSWORD_EMPTY).bail()
        .isLength({ max: 20, min: 8 }).withMessage(lang.PASSWORD_LENGTH).bail(),
    check(NAME).notEmpty().withMessage(lang.NAME_EMPTY).bail()
        .isAlpha().withMessage(lang.NAME_VALID).bail(),
    check(PHONE).notEmpty().withMessage(lang.PHONE_EMPTY).bail()
        .custom(val => {
            // TODO:: Validate International Phone Number
            return true
        }).withMessage(lang.PHONE_VALID).bail(),

    (req, res, next) => error(req, res, next)
]

exports.login = [
    check(PHONE).notEmpty().withMessage(lang.PHONE_EMPTY).bail()
        .custom(val => {
            // TODO:: Validate International Phone Number
            return true
        }).withMessage(lang.PHONE_VALID).bail(),
    check(PASSWORD).notEmpty().withMessage(lang.PASSWORD_EMPTY).bail()
        .isLength({ max: 20, min: 8 }).withMessage(lang.PASSWORD_LENGTH).bail(),

    (req, res, next) => error(req, res, next)
]