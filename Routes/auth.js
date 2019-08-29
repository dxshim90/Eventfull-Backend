const express = require("express");
const router = express.Router();
const authController = require("../controllers" / auth);

router.post("/signup", authController.createUSer);

router.post("/login", authController.loginUser);
