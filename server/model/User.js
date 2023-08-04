const mongoose = require("mongoose");
const Schema = mongoose.Schema;

UserSchema = Schema(
	{
		username: {
			type: String,
			lowercase: true,
			unique: true,
			required: [true, "can't be blank"],
			match: [/^[a-zA-Z0-9]+$/, "is invalid"],
			index: true,
		},
		email: {
			type: String,
			lowercase: true,
			unique: true,
			required: [true, "can't be blank"],
			match: [/\S+@\S+\.\S+/, "is invalid"],
			index: true,
		},
		password: String,
		profile: {
			firstname: String,
			lastname: String,
			bio: String,
			image: String,
			expPoints: Number,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
