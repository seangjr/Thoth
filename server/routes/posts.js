const express = require("express");
const router = express.Router();

const loggedIn = require("../middleware/loggedIn");
const controller = require("../controller/posts");

router.get("/", controller.getPosts);
router.get("/:id", controller.getPost);
router.post("/", loggedIn, controller.createPost);
router.put("/:id", loggedIn, controller.updatePost);
router.delete("/:id/:user_id", loggedIn, controller.deletePost);

router.get("/upvotes/:id", controller.checkUpvotes);
router.get("/upvote/:post_id/:user_id", controller.checkUpvote);
router.post("/upvote", loggedIn, controller.upvote);
router.delete("/downvote", loggedIn, controller.downvote);

module.exports = router;
