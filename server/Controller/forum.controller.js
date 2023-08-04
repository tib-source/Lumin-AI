const ForumServices = require("../services/ForumServices");

class Forum {
	static async getAllForums(req, res, next) {
		try {
			const allArticles = ForumServices.getAllForums();
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
