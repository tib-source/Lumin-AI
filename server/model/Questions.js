const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
	qType: String,
	question: String,
	choices: [String],
	answer: String,
});

module.exports = mongoose.model("Questions", QuestionSchema);
