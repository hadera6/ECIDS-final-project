
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Notification = require("../models/Notification.js");



router.get('/getNotification', function (req, res,) {
  
    Notification.find({}, function (err, notifications) {
        if (err) {
          res.json({ success: false, message: 'Error while loading news feed'});
        } else {
          res.json({ success: true, notifications: notifications });
        }
    });

});
module.exports = router;