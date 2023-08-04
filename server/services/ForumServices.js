const { Forums } = require("../model/forum");

class ForumServices {
	// get all forums
	static async getAllForums() {
		try {
			const allForums = Forums.find();
			return allForums;
		} catch (e) {
			console.log(`Could not fetch Forumss ${e}`);
		}
	}

	// create forums using body data

	// find forum using id

	// update forum content

	// delete forum
}

module.exports = ForumServices;
