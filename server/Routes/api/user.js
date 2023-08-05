const express = require("express");
const router = express.Router();
const userCtlr = require("../../Controller/user.controller");

router.use("/", userCtlr.getUserData);

module.exports = router;
