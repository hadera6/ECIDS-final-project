const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CitizenSchema = new Schema({
  
id: {
    type: String,
    required: true,
    unique:true
},

fname: {
    type: String,
    required: true
},

lname: {
    type: String,
    required: true
},

motherName:{
    type: String,
    required:false

},

fatherName:{
    type: String,
    required:false
},

emergencyname:{
    type: String,
    require:true

},
emergencynumber:{
    type: String,
    required:true
},

sex : {
    type: String,
    required: true
},

age: {
    type: Number,
    required: true
},

address: {
    type: String,
    required: true
},
placebirth: {
    type: String,
    required: true
},
datebirth: {
    type: String,
    required: true
},
nationality: {
    type: String,
    required: true
},
job: {
    type: String,
    required: false
},
homenum: {
    type: String,
    required: false
},
phonenum: {
    type: String,
    required: true
},
regdate: {
    type: Date,
    default: Date.now
},
bloodtype: {
    type: String,
    required: true
},

crime: {
    type: Number,
    default: 0
},
service: {
    type: Number,
    default: 0
},
maritalstatus: {
    type: String,
    required:true
},

educationstatus: {
    type: String,
    required:true
},

photo: {
    type: String,
    required:false
},
document:{
    type: String,
    required:false

}

});
module.exports = User = mongoose.model("citizen", CitizenSchema);