const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Notification = require("../models/Notification.js");

function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

router.post('/postNotification', function (req, res,) {
  
  const newNotification = new Notification({

    content: req.body.content,
    author: req.body.author,
    title: req.body.title,
    photo: req.body.photo,
    
  });

  newNotification.save()
    .then(notification => res.json(notification))
    .catch(err => console.log(err));

});
module.exports = router;