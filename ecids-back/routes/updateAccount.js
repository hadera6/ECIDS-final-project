
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Account = require("../models/Account.js");
const generateRegId = require("./generateRegistrationNo.js");


function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

router.post('/updateAccount', function (req, res,) {

    const Fname = titleCase(req.body.fname);
    const Lname = titleCase(req.body.lname);
  
    Account.findOne({id : req.body.id}, function(err, account) {
        if (!account){
            res.status(404).send("Unable to change");
        }
        else
            account.fname = Fname,
            account.lname = Lname,
            account.email = req.body.email,
            account.password = req.body.password,
            
            
            citizen.save().then(citizen => {
                res.json('Data updated successfully!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

});
module.exports = router;