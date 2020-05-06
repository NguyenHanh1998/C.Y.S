var express = require("express");
var router = express.Router();

const { check } = require("express-validator");

const userController = require("../../Controllers/User");
router.get("/", (req, res, next) => {
  res.json({ success: true });
});

router.post("/login", userController.postLogin);

module.exports = router;
