const mongoose = require('mongoose');

const seeker = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, { collection: 'seeker-data'}
);

module.exports = mongoose.model('seekerData', seeker);