const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

console.log(MONGO_URI);

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.dir);
// async function run() {
// 	try {
// 		// connect to mongo db cluster
// 		await client.connect();
// 		// perform queries to cluster
// 		await listDatabases(client);
// 	} catch (e) {
// 		console.error(e);
// 	} finally {
// 		client.close();
// 	}
// }

// run().catch(console.dir);

// async function listDatabases(client) {
// 	databasesList = await client.db().admin().listDatabases();

// 	console.log("Databases:");
// 	databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }
