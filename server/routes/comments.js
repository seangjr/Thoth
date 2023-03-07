const express = require("express");
const router = express.Router();

const loggedIn = require("../middleware/loggedIn");
const controller = require("../controller/comments");

router.get("/", controller.getComments);
router.get("/:id", controller.getComment);
router.post("/", loggedIn, controller.createComment);
router.delete("/", loggedIn, controller.deleteComment);

module.exports = router;
