const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Transaction = require("../models/Transaction.js");

function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}
router.post('/madeTransaction', function (req, res,) {
  
    Madeby = titleCase(req.body.madeby);
    Madeto = titleCase(req.body.madeto);

    const newTransaction = new Transaction({

    madeby: Madeby,
    madeto: Madeto,
    type: req.body.type,
    
  });

  newTransaction.save()
    .then(transaction => res.json(transaction))
    .catch(err => console.log(err));

});
module.exports = router;