const express = require('express');
const router = express.Router();

const {homePageFunction} = require('../Controllers/staticPageControllers')

router.get('/', homePageFunction)
.get('/signup', (req, res) => {
    res.render('signup');
}).get('/login', (req, res) => {
    res.render('login');
}).get('/error', (req, res) => {
    res.render('universalErrorpage')
});
module.exports = router;