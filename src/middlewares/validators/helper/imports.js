const { check } = require("express-validator");
const { validationError } = require("../../../utilities/reponses");
const tongue = require('../../../config/languageConfig.json')

module.exports = {
    "check": check,
    "error": validationError,
    "lang": tongue[process.env.TONGUE],
}