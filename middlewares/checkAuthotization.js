const {getUser} = require('../services/sessionIDauth')

async function checkAuth(req, res, next) {
    const token = req.cookies.uidKey;

    const userData = getUser(token);

    req.userData = userData;
    next();
}

module.exports = {
    checkAuth,
}