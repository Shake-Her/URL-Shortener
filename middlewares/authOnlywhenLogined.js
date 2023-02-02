const {getUser} = require('../services/sessionIDauth')

async function handleUserafterLogin(req, res, next) {
    
    const token = req.cookies.uidKey;

    if (!token)
        return res.redirect('/error')
    
    const userData = getUser(token);

    if (!userData)
        return res.redirect('/error')
    
    req.sendUserdata = userData;
    next();
}

module.exports = {
    handleUserafterLogin,
}