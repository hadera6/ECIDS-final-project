
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");



router.get('/displayAllCitizen', function (req, res,) {
  
    Citizen.find({}, function (err, citizens) {
        if (err) {
          res.json({ success: false, message: 'Error while loading citizens'});
        } else {
          res.json({ success: true, citizens: citizens });
        }
    });

});
module.exports = router;