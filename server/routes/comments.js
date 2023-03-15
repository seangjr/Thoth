const express = require("express");
const router = express.Router();

const loggedIn = require("../middleware/loggedIn");
const controller = require("../controller/comments");

router.get("/", controller.getComments);
router.get("/:id", controller.getComment);
router.get("/post/:id", controller.getCommentsByPost);
router.post("/", loggedIn, controller.createComment);
router.delete("/", loggedIn, controller.deleteComment);

router.get("/upvotes/:id", controller.checkUpvotes);
router.get("/upvote/:comment_id/:user_id", controller.checkUpvote);
router.post("/upvote", loggedIn, controller.upvote);
router.delete("/downvote", loggedIn, controller.downvote);

module.exports = router;
