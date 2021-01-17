
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");


router.get('/displayOneCitizen', function (req, res,) {
  
    Citizen.findOne({id : req.body.id} , function(err, citizen) {
        if (err) {
            res.json({ success: false, message: 'Error while loading the citizen'});
          } else {
            res.json({ success: true, citizen: citizen });
        }
    });

});
module.exports = router;