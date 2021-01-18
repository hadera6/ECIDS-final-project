const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const CardSchema = new Schema({

id: {
    type: String,
    required: true,
    unique:true
}, 
ownerRegId: {
    type: String,
    required:true
},
fname:{
    type: String,
    required:true
},
lname: {
    type:String,
    required:true
},
photo: {
    type: String,
    required: true
},
blood:{
    type:String,
    required:true
},
crime: {
    type:Number,
    default: 0
},
service: {
    type:Number,
    default: 0
},
preparedate:{
    type:Date,
    default:Date.now
},
expiredate:{
    type:Date,
    required: true
},
block: {
    type: Number,
    default: 0
}
});
module.exports = Card = mongoose.model("card", CardSchema);