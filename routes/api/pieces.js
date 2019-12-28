const router = require("express").Router();
const piecesController = require("../../controllers/piecesController");

router.route("/")
  .get(piecesController.findAll);

module.exports = router;
