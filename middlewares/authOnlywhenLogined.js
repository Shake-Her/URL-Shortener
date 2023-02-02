//Stateful Authorization

const { getUser } = require('../services/sessionIDauth')

async function handleUserafterLogin(req, res, next) {
    
    const userSessionId = req.cookies.uidKey;

    if (!userSessionId)
        return res.redirect('/*')
    
    const userData = getUser(userSessionId);

    if (!userData)
        return res.redirect('/*')
    
    req.sendUserdata = userData;
    next();
}

module.exports = {
    handleUserafterLogin,
}