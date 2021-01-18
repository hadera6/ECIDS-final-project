
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");


router.post('/unsetWanted', function (req, res,) {
  
    Citizen.findOne({id : req.body.id}, function(err, citizen) {

        if (!citizen){
            res.status(404).send("Citizen not found.");
        }
        else
            citizen.crime = 0 ,
            
            citizen.save().then(citizen => {
                res.json('Citizen removed from wanted list successfully!');
            })
            .catch(err => {
                res.status(400).send("Unable to remove citizen from wanted list");
            });
    });

});

module.exports = router;