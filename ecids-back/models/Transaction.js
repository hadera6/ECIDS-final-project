const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TransactionSchema = new Schema({
  madefrom: {
    type: String,
    required: true
  },
  madeto: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default:Date.now
  },
  type:{
    type:String,
    required:true
  }
});
module.exports = Transaction = mongoose.model("transaction", TransactionSchema);