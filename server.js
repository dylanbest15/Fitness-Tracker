// requirements
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// host on port
const PORT = process.env.PORT || 3000;

// require models
const db = require("./models");

// connect to server
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// create connection
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});