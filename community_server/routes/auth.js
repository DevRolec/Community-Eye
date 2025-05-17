const express = require("express");
const router = express.Router();
const { signup, login, verifyEmail } = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware");

// POST /api/auth/signup
router.post("/signup",signup);

// POST /api/auth/login
router.post("/login", login);

// GET /api/auth/verify-email/:token


module.exports = router;
