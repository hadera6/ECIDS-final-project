
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Transaction = require("../models/Transaction.js");


router.get('/getTransaction', function (req, res,) {
  
    Transaction.find({}, function (err, transactions) {
        if (err) {
          res.json({ success: false, message: 'Error while loading transactions'});
        } else {
          res.json({ success: true, transactions: transactions });
        }
    });

});
module.exports = router;