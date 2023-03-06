const app = require("express");
const router = app.Router();

const controller = require("../controller/posts");

router.get("/", controller.getPosts);
router.get("/:id", controller.getPost);
router.post("/", controller.createPost);
router.put("/", controller.updatePost);
router.delete("/", controller.deletePost);

module.exports = router;
