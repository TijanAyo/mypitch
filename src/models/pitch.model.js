const mongoose = require('mongoose')


const pitchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://bit.ly/3AlG17F"
    },
    link: {
        type: Array
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});



module.exports = mongoose.model('pitch', pitchSchema)