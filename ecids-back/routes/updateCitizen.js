
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");
const generateRegId = require("./generateRegistrationNo.js");


function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

router.post('/updateCitizen', function (req, res,) {

    const Fname = titleCase(req.body.fname);
    const Lname = titleCase(req.body.lname);
  
    Citizen.findOne({id : req.body.id}, function(err, citizen) {
        if (!citizen){
            res.status(404).send("Citizen not found.");
        }
        else
            citizen.fname = Fname,
            citizen.lname = Lname,
            citizen.sex = req.body.sex,
            citizen.age = req.body.age,
            citizen.address = req.body.address,
            citizen.placebirth = req.body.placebirth,
            citizen.datebirth = req.body.datebirth,
            citizen.nationality = req.body.nationality,
            citizen.job = req.body.job,
            citizen.homenum = req.body.homenum,
            citizen.phonenum = req.body.phonenum,
            citizen.bloodtype = req.body.bloodtype,
            citizen.maritalstatus = req.body.maritalstatus,
            citizen.educationstatus = req.body.educationstatus,
            citizen.photo = req.body.photo,
            citizen.document = req.body.document,
            
            citizen.save().then(citizen => {
                res.json('Citizen updated successfully!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

});
module.exports = router;