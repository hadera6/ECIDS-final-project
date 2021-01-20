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

router.post('/registerCitizen', function (req, res,) {
  
  Fname = titleCase(req.body.fname);
  Lname = titleCase(req.body.lname);
  
  const newCitizen = new Citizen({

    id: generateRegId(Fname,Lname),
    fname: Fname,
    lname: Lname,
    sex: req.body.sex,
    age: req.body.age,
    address: req.body.address,
    mothername: req.body.mothername,
    fathername:req.body.fathername,
    placebirth: req.body.placebirth,
    datebirth: req.body.datebirth,
    nationality: req.body.nationality,
    job: req.body.job,
    homenum: req.body.homenum,
    phonenum: req.body.phonenum,
    bloodtype: req.body.bloodtype,
    maritalstatus: req.body.maritalstatus,
    educationstatus: req.body.educationstatus,
    emergencyname:req.body.emergencyname,
    emergencynumber:req.body.emergencynumber,
    photo: req.body.photo,
    document: req.body.document,
  
  });

  newCitizen.save()
    .then(citizen => res.json(citizen))
    .catch(err => console.log(err));

});
module.exports = router;