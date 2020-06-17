const express = require("express");

const userController = require("../controller/userController");

const router = express.Router();

router.get("/list", userController.list);
router.get("/data", userController.specificData);

module.exports = router;
