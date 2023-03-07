const app = require("express");
const router = app.Router();

const loggedIn = require("../middleware/loggedIn");
const controller = require("../controller/posts");

router.get("/", controller.getComments);
router.get("/:id", controller.getComment);
router.post("/", loggedIn, controller.createComment);
router.delete("/", loggedIn, controller.deleteComment);

module.exports = router;
