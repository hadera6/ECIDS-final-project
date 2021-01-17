const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const CardSchema = new Schema({

id: {
    type: String,
    required: true,
    unique:true
},  
photo: {
    type: String,
    required: true
},
crime: {
    type:Boolean,
    default:false
},
service: {
    type:Boolean,
    default:false
},
preparedate:{
    type: Date,
    default: Date.now
},
expiredate:{
    type: Date,
    default: Date.now
},
block: {
    type: Boolean,
    default: false
},
owner: {
    type: Boolean,
    default: false
}
});
module.exports = Card = mongoose.model("card", CardSchema);