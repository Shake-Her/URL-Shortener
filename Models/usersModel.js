const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required:true
    }
}, { timestamps: true })

const USER = mongoose.model('user', usersSchema);

module.exports = USER;