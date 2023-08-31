const { generateToken } = require("../helper/auth");
const UserServices = require("../services/UserServices");
const bcrypt = require("bcryptjs")

const salt = 10

module.exports = class UserController {
	static async getUserData(req, res) {
		try {
			const user = await UserServices.getUserData("underworld");
			if (!user) {
				res.status(404).json({
					error: "User not found",
				});
			}
			res.status(200).json(user);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: error });
		}
	}

	static async userData(username = "underworld") {

		try {
			const user = await UserServices.getUserData(username)
			if (!user) {
				return error
			}
			return user
		} catch (error) {

			return error
		}
	}
	static async login(req, res) {
		const { username, password } = req.body;

		try {
			const user = await UserServices.getUserData(username)
			const userData = {
				username: user.username,
				email: user.email,
				picture: user.profile.image,
				expPoints: user.profile.expPoints,
				id: user._id
			}

			user.comparePassword(password, function (error, isMatch) {
				if (error) {
					res.status(403).json({
						error: error.message,
						error_code: error.type,
						access: "denied"
					})
				}
				if (isMatch) {
					const token = generateToken(JSON.stringify(userData))
					return res.status(200).json({
						message: "Authorised",
						user: userData,
						token
					})
				} else {
					return res.status(403).json({
						error: "Invalid Password",
						access: "denied"
					})

				}

			})


		} catch (e) {
			console.error(`${e.name}: ${e.message}`);
			res.status(400).json(e)
		}
	}


	static async register(req, res) {
		console.log(req.body, "request")
		const { username, password } = req.body
		try {
			const newUser = await UserServices.createUser({ username, password })
			if (newUser) {
				console.log(newUser)
				return res.status(201).json({
					message: "success",
				})
			} else {
				return res.status(400).json({
					error: "Failed to create the user"
				})
			}
		} catch (error) {
			res.status(400).json(error)
		}
	}
};
