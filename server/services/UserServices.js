const User = require("../model/User");

module.exports = class UserServices {
	static async getUserData(username) {
		try {
			console.log("whatttt");

			const user = await User.findOne({ username: username });

			return user;
		} catch (e) {
			console.log(`Could not fetch user: ${e}`);
		}
	}
};
