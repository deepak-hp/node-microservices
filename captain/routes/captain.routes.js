const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller")
const authMiddleware = require("../middleware/authMiddleware")


router.post("/register", captainController.register)
router.post("/login", captainController.login)
router.post("/logout", captainController.logout)
router.get("/profile", authMiddleware.captainAuth, captainController.profile)

module.exports = router;