const express = require('express');
const router = express.Router();
const {loginController, test} = require("../Controllers/authController");
const verifyToken = require("../middleware/decodeJWT");

// POST /Routes/login
router.post('/login', loginController)
router.use(verifyToken);
router.get('/test',test)
module.exports = router;