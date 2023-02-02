const express = require('express');
const router = express.Router();
const {handelLogin,handelSignup } = require('../Controllers/userControllers');
//extra step to be careful to parse if data is json or form!!
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/signup', handelSignup).post('/login', handelLogin);

module.exports = router;