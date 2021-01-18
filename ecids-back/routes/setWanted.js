
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");


router.post('/setWanted', function (req, res,) {
  
    Citizen.findOne({id : req.body.id}, function(err, citizen) {

        if (!citizen){
            res.status(404).send("Citizen not found.");
        }
        else
            citizen.crime = 1 ,
            
            citizen.save().then(citizen => {
                res.json('Citizen setted as wanted successfully!');
            })
            .catch(err => {
                res.status(400).send("Unable to set the citizen as wanted");
            });
    });

});

module.exports = router;