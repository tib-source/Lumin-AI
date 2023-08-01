const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

async function run() {
	try {
		// connect to mongo db cluster
		await client.connect();
		// perform queries to cluster
		await listDatabases(client);
	} catch (e) {
		console.error(e);
	} finally {
		client.close();
	}
}

run().catch(console.dir);

async function listDatabases(client) {
	const databaseList = await client.db().admin().listDatabases();
	console.log("Databases");
	databaseList.databases.forEach((element) => {
		console.log(` - ${element.name}`);
	});
}
