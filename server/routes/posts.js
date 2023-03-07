const app = require("express");
const router = app.Router();

const loggedIn = require("../middleware/loggedIn");
const controller = require("../controller/users");

router.get("/", controller.getPosts);
router.get("/:id", controller.getPost);
router.get("/user/:id", controller.getPostByUser);
router.post("/", loggedIn, controller.createPost);
router.put("/", loggedIn, controller.updatePost);
router.delete("/", loggedIn, controller.deletePost);

module.exports = router;
