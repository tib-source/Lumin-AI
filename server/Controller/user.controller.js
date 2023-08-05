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
};
