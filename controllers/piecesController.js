const db = require("../models");
module.exports = {
    findAll : function (req, res) {
        db.Piece
        .find()
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(422).hson(err))
    },
    create : function (req, res) {
        db.Piece
        .create(req.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err=>res.status(422).json(err));
    }
}