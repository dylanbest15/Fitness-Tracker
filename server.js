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

// require routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// connect to database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// create connection
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});