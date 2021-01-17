const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
// Load Account model
const Account = require("../models/Account.js");

// @route POST api/account/register
// @desc Register account
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  Account.findOne({ username: req.body.username }).then(account => {
      if (account) {
        return res.status(400).json({ username: "Username already exists" });
      } else {
        const newAccount = new Account({
          fname: req.body.fname,
          username: req.body.username,
          role: req.body.role,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newAccount.password, salt, (err, hash) => {
            if (err) throw err;
            newAccount.password = hash;
            newAccount
              .save()
              .then(account => res.json(account))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/account/login
// @desc Login account and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const username = req.body.username;
    const password = req.body.password;
  // Find account by username
    Account.findOne({ username }).then(account => {
      // Check if account exists
      if (!account) {
        return res.status(404).json({ usernamenotfound: "UserName not found" });
      }
  // Check password
      bcrypt.compare(password, account.password).then(isMatch => {
        if (isMatch) {
          // account matched
          // Create JWT Payload
          const payload = {
            id: account.id,
            fname: account.fname
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                role: account.role,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  module.exports = router;