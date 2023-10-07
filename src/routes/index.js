const express = require("express");
const signupRouter = require("./usersignup");
const loginRouter = require("./userlogin");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("node js server working fine");
});

router.use("/signup", signupRouter);
router.use("/login", loginRouter);

module.exports = router;
