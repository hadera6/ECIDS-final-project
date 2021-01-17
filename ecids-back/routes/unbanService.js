
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");


router.post('/unbanService', function (req, res,) {
  
    Citizen.findOne({id : req.body.id}, function(err, citizen) {

        if (!citizen){
            res.status(404).send("Citizen not found.");
        }
        else
            citizen.service = 0,
            
            citizen.save().then(citizen => {
                res.json('Citizen banned from services successfully!');
            })
            .catch(err => {
                res.status(400).send("Unable to ban the citizen");
            });
    });

});

module.exports = router;