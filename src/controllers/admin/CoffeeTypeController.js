const { lang } = require("../../middlewares/validators/helper/imports")
const { CoffeeType, getAllCoffeeTypes, getCoffeeTypeByStatus, storeCoffeeType, getCoffeeType, deleteCoffeeType } = require("../../models/CoffeeType")
const { dataSuccess, blankSuccess, serverError, notFoundError } = require("../../utilities/reponses")

exports.index = async (req, res) => {
    let enabledCoffeeType = req.query.isEnabled

    if (enabledCoffeeType == null) getAllCoffeeTypes(res).then(coffeeType => dataSuccess(res, coffeeType))
    else getCoffeeTypeByStatus(res, enabledCoffeeType).then(coffeeType => dataSuccess(res, coffeeType))

}

exports.show = async (req, res) => {
    const uId = req.params.uId
    if (uId == null) return notFoundError(res, lang.COFFEE_TYPE_NOT_FOUND)

    getCoffeeType(res, uId).then(v => {
        if (v == null) notFoundError(res, lang.COFFEE_TYPE_NOT_FOUND)
        else dataSuccess(res, v)
    })
}


exports.store = (req, res) => {
    storeCoffeeType(res, req.body).then((v) => dataSuccess(res, v))
}