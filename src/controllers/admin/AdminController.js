const { dataSuccess } = require("../../utilities/reponses")

exports.index = (req, res) => {
    dataSuccess(res, "Welcome Admin")
}