const express = require('express');
const router = express.Router();
const { saveDatatoDB, getInfo, redirectURL } = require('../Controllers/urlControllers')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.get('/analytics/:id', getInfo).get('/:id', redirectURL);
router.post('/', saveDatatoDB);

module.exports = router;



