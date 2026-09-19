const express = require("express");
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);

router.get("/me", authController.personal);

router.patch("/password", authController.changePass);
router.post("/forgot_password", authController.forgot_password);
router.post("/reset_password", authController.reset_password);

module.exports = router;