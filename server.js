const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const mongodbString = require("./config/mongodb");

const app = express();

mongoose.connect(mongodbString, { useNewUrlParser: true }, () => {
  console.log("Db Connected");
});

app.use(morgan("tiny"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
