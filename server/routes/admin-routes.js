const express = require("express");
const { adminLoginController } = require("../controllers/admin-controllers");
const router = express.Router();

router.post("/admin", adminLoginController);

module.exports = router;
