const ForumServices = require("../services/ForumServices");

class Forum {
	static async getAllForums(req, res, next) {
		try {
			const allArticles = await ForumServices.getAllForums();
			console.log("meow");
			if (!allArticles) {
				res.status(404).json("No Forums Found.");
			}
			res.json(allArticles);
		} catch (e) {
			res.status(500).json({ error: e });
		}
	}
}

module.exports = Forum;
