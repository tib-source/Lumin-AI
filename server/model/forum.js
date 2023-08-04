const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	value: {
		type: Number,
		enum: [1, -1],
	},
});

var commentSchema = mongoose.Schema({
	comments: {
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		comments: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comments",
		},
		content: String,
		likes: likeSchema,
	},
});

const Comments = mongoose.model("Comments", commentSchema);

const ForumSchema = Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		likes: likeSchema,
		comments: commentSchema,
	},
	{ timestamps: true }
);
const Forums = mongoose.model("Forum", ForumSchema);
module.exports = { Forums, Comments };
