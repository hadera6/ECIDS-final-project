
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");


router.get('/verifyId', function (req, res,) {
  
    Citizen.findOne({id : req.body.id} , function(err, citizen) {
        if (err) {
            res.json({ success: false, message: 'Id not registered'});
          } else {
            res.json({ success: true, crime:citizen.crime, service:citizen.service });
        }
    });

});
module.exports = router;