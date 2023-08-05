const express = require("express");
const router = express.Router();
const ForumCtrl = require("../../Controller/forum.controller");

router.get("/", ForumCtrl.getAllForums);
module.exports = router;
