const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs")
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
			match: [/\S+@\S+\.\S+/, "is invalid"],
			index: true,
			sparse: true
		},
		password: {
			type: String,
			required: [true, "can't be blank"],
			match: [/^[a-zA-Z0-9]+$/, "is invalid"],
			index: true,
		},
		profile: {
			firstname: String,
			lastname: String,
			bio: String,
			image: String,
			expPoints: Number,
			questionCollection: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Questions",
			},
		},
	},
	{ timestamps: true, collections: "users" }
);


UserSchema.pre("save", function (next) {
	const user = this

	if (user.isModified("password") || user.isNew) {
		bcrypt.genSalt(10, (saltError, salt) => {
			if (saltError) {
				console.log("Error Generating the Salt\n" + saltError)
				return next(saltError)
			} else {
				return bcrypt.hash(user.password, salt, (hashError, hash) => {
					if (hashError) {
						return next(hashError)
					} else {
						user.password = hash
						next()
					}
				})
			}
		})
	}
}
)

UserSchema.methods.comparePassword = function (toTest, cb) {
	bcrypt.compare(toTest, this.password, function (error, isMatch) {
		if (error) {
			return cb(error)
		} else {
			return cb(null, isMatch)
		}
	})
}

module.exports = mongoose.model("User", UserSchema)