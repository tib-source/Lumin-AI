const express = require("express");
const router = express.Router();
const userCtlr = require("../../Controller/user.controller");
const { authJWT } = require("../../helper/auth");
const protect = require("../../middleware/auth")

router.get("/", userCtlr.getUserData);
router.post("/auth", protect, userCtlr.login);
router.post("/register", userCtlr.register);

module.exports = router;
