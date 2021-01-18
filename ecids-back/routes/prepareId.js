const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Citizen = require("../models/Citizen.js");
const generateIdNo= require("./generateIdNo.js");


function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

function changeDateFormat(){

    const time = new Date();
    const date = ('0' + time.getDate()).slice(-2);
    const month = ('0' + (time.getMonth() + 1)).slice(-2);
    const year = time.getFullYear();
    const str = `${month}/${date}/${year}`;
    return str;

}
function expireDateOf(){


}

router.post('/prepareId', function (req, res,) {
  
  Fname = titleCase(req.body.fname);
  Lname = titleCase(req.body.lname);
  
  const newCitizen = new Citizen({

    id: generateIdNo(Fname,Lname),
    ownerId: req.body.ownerId,
    fname: Fname,
    lname: Lname,
    photo:req.body.photo,
    expireDate: expireDateOf(Date.now),

  
  });

  newCitizen.save()
    .then(citizen => res.json(citizen))
    .catch(err => console.log(err));

});
module.exports = router;