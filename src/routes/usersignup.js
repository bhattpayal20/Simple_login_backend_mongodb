const express = require("express");
const userSignup = require("../app/controller/userContoller");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/user",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  userSignup.userSignup
);

module.exports = router;
