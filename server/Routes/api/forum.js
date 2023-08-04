const express = require("express");
const router = express.Router();
const forumData = require("./../../data/forums.json");
const ForumCtrl = require("../../Controller/forum.controller");

router.get("/", ForumCtrl.getAllForums);
module.exports = router;
