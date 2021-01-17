const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AccountSchema = new Schema({
  
  fname: {
    type: String,
    required: false
  },
  lname:{
    type: String,
    required:false
  },
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  activate: {
    type: Boolean,
    default: false
  }, 
  document: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Account = mongoose.model("account", AccountSchema);