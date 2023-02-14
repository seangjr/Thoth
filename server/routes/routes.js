const express = require("express");
const router = express.Router();

/* Import routes */
const users = require("./users");

/* Setup routes */
router.use("/users", users);

module.exports = router;
