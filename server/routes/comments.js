const express = require("express");
const router = express.Router();

const loggedIn = require("../middleware/loggedIn");
const controller = require("../controller/comments");

router.get("/", controller.getComments);
router.get("/:id", controller.getComment);
router.get("/post/:id", controller.getCommentsByPost);
router.post("/", loggedIn, controller.createComment);
router.delete("/", loggedIn, controller.deleteComment);

router.put("/upvote/:id", loggedIn, controller.upvote);
router.put("/downvote/:id", loggedIn, controller.downvote);

module.exports = router;
