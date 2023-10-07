const express = require("express");
const { check, validationResult } = require("express-validator");
const { userLogin, loggedinUser } = require("../app/controller/userContoller");
const auth = require("../middleware/authmiddleware");
const router = express.Router();

router.post(
  "/user",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  userLogin
);

router.get("/medetail", auth, loggedinUser);

module.exports = router;
