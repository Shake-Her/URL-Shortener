const URL = require('../Models/urlSchema');

const homePageFunction = async function (req, res) {

    if (!req.userData) {
        return res.redirect('login');
    }

    const currUserdata = await URL.find({ createdBy: req.userData._id });

    res.render('home', {
        urls: currUserdata,
    })
}

module.exports = {
    homePageFunction,
}