const controller = require("../controller/users");
const express = require("express");
const router = express.Router();

router.post("/login", controller.loginUser);

module.exports = router;
