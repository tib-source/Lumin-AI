const express = require("express");
const router = express.Router();
const forumData = require("./../../data/forums.json");
router.get("/", (req, res) => {
	console.log(forumData);
});

module.exports = router;
