const express = require("express");
const router = express.Router();
const trueOrFalse = require("../../data/trueOrFalse.json");
const multipleChoice = require("../../data/multipleChoice.json");
const fillBlank = require("../../data/fillBlank.json");

const handlePostReq = (req, res, type) => {
	try {
		const { ammount, topic, level } = req.body;
		console.log(type);
		if (!ammount || !topic || !level) {
			res.status(400).json({
				msg: "Please provide values for ammount, topic and level ",
			});
			return;
		} else {
			try {
				const prompt = ` Generage ${parseInt(
					ammount
				)} {${type}} questions about the topic {${topic}} with the difficulty level of a {${level}}. Return the quesitons and answers in code JSON format.`;

				return prompt;
			} catch (error) {
				console.log(error);
			}
		}
	} catch (error) {
		console.log(error);
		return res.status(400).json({ msg: "Invalid Post Request" });
	}
};

router.get("/", (req, res) => {
	res.status(200).json({
		message: "List of available questions",
		data: [
			{
				type: "True or False",
				uri: "/api/questions/trueFalse",
			},
		],
	});
});

router.post("/trueFalse", (req, res) => {
	const prompt = "meow";
	if (prompt) {
		// temporarily send hardcoded data untill i get the open ai api
		res.status(200);
		res.json({ prompt, ...trueOrFalse });
	}

	console.log(prompt);
	// res.status(500).send({ msg: "server error" });
});

router.post("/multipleChoice", (req, res) => {
	// const prompt = handlePostReq(req, res, "Multiple Choice");
	const prompt = "meow";
	if (prompt) {
		// temporarily send hardcoded data untill i get the open ai api
		return res.status(200).json({ prompt, ...multipleChoice });
	}
	res.status(500).send({ msg: "server error" });
});

router.post("/fillBlank", (req, res) => {
	const prompt = handlePostReq(req, res, "Fill in the Blank");
	if (prompt) {
		// temporarily send hardcoded data untill i get the open ai api
		return res.status(200).json({ prompt, fillBlank });
	}
	res.status(500).json({ msg: "server error" });
});

module.exports = router;
