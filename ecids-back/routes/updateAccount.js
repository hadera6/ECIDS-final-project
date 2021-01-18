
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Account = require("../models/Account.js");

function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

router.post('/updateAccount', function (req, res,) {

    const Fname = titleCase(req.body.fname);
    const Lname = titleCase(req.body.lname);
  
    Account.findOne({username : req.body.username}, function(err, account) {
        if (!account){
            res.status(404).send("Account not found.");
        }
        else 
            
            account.fname = Fname,
            account.lname = Lname,
            account.email = req.body.email,
            account.password = req.body.password,
            
            account.save().then(account => {
                res.json('Account updated successfully!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

});
module.exports = router;