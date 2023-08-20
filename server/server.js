const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
require("dotenv").config();
const app = express();
// connecting to the mongodb database using mongoose
mongoose
	.connect(process.env.MONGO_URI, {})
	.then((res) => console.log(`Connection Succesful ${res}`))
	.catch((err) => console.log(`Error in DB connection ${err}`));

// response body parser
app.use(cors());
app.use(express.json());

// app.use(express.urlencoded({ limit: true }));

// api routes
app.use("/api/questions", require("./Routes/api/questions"));
app.use("/api/forum", require("./Routes/api/forum"));
app.use("/api/user", require("./Routes/api/user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT || 5000, () => {
	console.log(`Server running on port: ${PORT}`);
});
