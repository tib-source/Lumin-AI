const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
require("dotenv").config();

const app = express();

// response body parser
app.use(express.json());
// app.use(express.urlencoded({ limit: true }));

// api routes
app.use("/api/questions", require("./Routes/api/questions"));

const PORT = process.env.PORT || 5000;
app.listen(PORT || 5000, () => {
  console.log(`Server running on port: ${PORT}`);
});
