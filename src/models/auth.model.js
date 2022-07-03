const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    googleId: {
        type: String
    }
});

module.exports = mongoose.model('User', authSchema)