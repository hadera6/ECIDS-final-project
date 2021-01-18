const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const NotificationSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true

  },
  photo:{
    type: String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Notification = mongoose.model("notification", NotificationSchema);