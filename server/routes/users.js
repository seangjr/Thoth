const express = require("express");
const router = express.Router();

const loggedIn = require("../middleware/loggedIn");
const controller = require("../controller/users");

router.get("/verify", loggedIn, controller.verify);
router.post("/login", controller.loginUser);
router.post("/register", controller.registerUser);

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.put("/update/:id", loggedIn, controller.updateUser);
router.put("/update/password/:id", loggedIn, controller.updateUserPassword);
router.delete("/delete/:id", loggedIn, controller.deleteUser);

module.exports = router;
