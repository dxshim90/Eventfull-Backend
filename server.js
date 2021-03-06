const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mongodbString = require("./config/mongodb");
const userRoutes = require("./Routes/users");
const authRouter = require("./routes/auth");
const authMiddleware = require("./middleware/auth");
const errorMiddleware = require("./middleware/error");

const app = express();

mongoose.connect(mongodbString, { useNewUrlParser: true }, () => {
  console.log("Db Connected");
});

app.use(morgan("tiny"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("*", authMiddleware);
app.use(errorMiddleware);
app.use("/users", userRoutes);

app.get("/"),
  (req, res) => {
    res.json("Working");
  };

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
