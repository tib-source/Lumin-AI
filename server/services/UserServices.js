const User = require("../model/User");

module.exports = class UserServices {
	static async getUserData(username) {
		try {

			const user = await User.findOne({ username: username });

			return user;
		} catch (e) {
			console.log(`Could not fetch user: ${e}`);
			return null
		}
	}

	static async createUser({ username, password }) {
		try {
			const newUser = await User.create({
				username,
				password
			})

			return newUser
		} catch (e) {
			console.log(`Unable to create new user: ${e}`)
			return null
		}
	}

};
