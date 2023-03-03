const controller = require("../controller/users");
const express = require("express");
const router = express.Router();

const loggedIn = require("../middleware/loggedIn");

router.get("/verify", loggedIn, controller.verify);
router.post("/login", controller.loginUser);
router.post("/register", controller.registerUser);

module.exports = router;
