const router = require("express").Router();
const bookRoutes = require("./pieces");

router.use("/pieces", piecesRoutes);

module.exports = router;