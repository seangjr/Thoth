const controller = require("../controller/users");
const express = require("express");
const router = express.Router();

router.post("/login", controller.loginUser);
router.post("/register", controller.registerUser);

module.exports = router;
