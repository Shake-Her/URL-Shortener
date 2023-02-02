//stateless authorization
const jwt = require('jsonwebtoken')
require('dotenv').config();

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email:user.email,
    }, process.env.SECRET_JWT_KEY);
}

function getUser(token) {
    if (!token)
        return null;
    return jwt.verify(token, process.env.SECRET_JWT_KEY);
}

module.exports = {
    setUser,
    getUser,
}