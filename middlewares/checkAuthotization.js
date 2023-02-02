const {getUser} = require('../services/sessionIDauth')

async function checkAuth(req, res, next) {
    const userSessionId = req.cookies.uidKey;

    const userData = getUser(userSessionId);

    req.userData = userData;
    next();
}

module.exports = {
    checkAuth,
}