const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pieceSchema = new Schema({
    name : {type : String, required :true},
    effects : {type : Array , required : true},
    cost : {type : Number , required : true}
});
const Piece = mongoose.model("Piece",pieceSchema);
module.exports = Piece;