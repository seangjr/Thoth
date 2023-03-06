const app = require("express");
const router = app.Router();

const controller = require("../controller/comments");

router.get("/", controller.getComments);
router.get("/:id", controller.getComment);
router.post("/", controller.createComment);
router.delete("/", controller.deleteComment);

module.exports = router;
