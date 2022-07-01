const express = require("express");
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
} = require("../controllers/seeker-controller");

const router = express.Router();

router.post("/jobsignup", signup);
router.post("/joblogin", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);
module.exports = router;