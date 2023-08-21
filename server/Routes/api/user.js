const express = require("express");
const router = express.Router();
const userCtlr = require("../../Controller/user.controller");
const { authJWT } = require("../../helper/auth");

router.get("/", userCtlr.getUserData);
router.post("/auth", userCtlr.login);
router.post("/register", userCtlr.register);

module.exports = router;
