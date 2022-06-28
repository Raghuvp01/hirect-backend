const mongoose = require('mongoose');

const seeker = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 4
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    }
}, { collection: 'seeker-data'}
);

module.exports = mongoose.model('seekerData', seeker);