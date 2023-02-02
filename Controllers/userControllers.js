const USER = require('../Models/usersModel');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../services/sessionIDauth')

const handelSignup = async (req, res) => {
    const body = req.body;
    
    const result = await USER.create({
        userName: body.userName,
        email: body.email,
        password : body.password
    })

    res.redirect('/');
}

const handelLogin = async (req, res) => {
    const body = req.body;
    
    const findData = await USER.findOne({
        email: body.email,
        password:body.password
    })

    if (!findData)
        return res.redirect('/*');
    
    //if everything is upto this point then only
    sessionID = uuidv4();
    setUser(sessionID, findData);
    res.cookie('uidKey', sessionID);
    
    res.redirect('/');
}

module.exports = {
    handelLogin,
    handelSignup,
}