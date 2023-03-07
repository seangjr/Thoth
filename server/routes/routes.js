const express = require("express");
const router = express.Router();

/* Import routes */
const users = require("./users");
const posts = require("./posts");
const comments = require("./comments");

/* Setup routes */
router.use("/users", users);
router.use("/posts", posts);
router.use("/comments", comments);

module.exports = router;
