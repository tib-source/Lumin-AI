const { generateToken } = require("../helper/auth");
const UserServices = require("../services/UserServices");

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
				return null
			}
			return user
		} catch (error) {
			console.log(error)
			return null
		}
	}
	static async login(req, res) {
		try {
			const { username, password } = req.body;
			const user = await UserServices.getUserData(username)
			const userData = {
				email: user.email,
				username: user.username,
				id: user._id
			}
			if (password == user.password) {
				const token = generateToken(JSON.stringify(userData))
				res.status(200).json({
					message: "Authorised",
					user: userData,
					token
				})
			} else {

				res.status(403).json({ access: "denied" })
			}

		} catch (error) {
			console.log(error)
		}
	}
};
