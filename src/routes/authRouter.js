const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");



router.post("/register", authController.register);
router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/me", authController.personal);
router.post("/forgot_password", authController.forgot_password);

router.patch("/password",authMiddleware, authController.changePass);

module.exports = authRouter;