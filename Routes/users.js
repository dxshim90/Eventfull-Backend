const express = require("express");
const router = express.Router();

const User = require("../model/User");
const userController = require("../controllers/users");

router.post("/", userController.createUser);

router.get("/", userController.getUsers);

module.exports = router;
