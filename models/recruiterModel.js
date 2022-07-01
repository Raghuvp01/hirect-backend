const mongoose = require('mongoose');

const recruiter = new mongoose.Schema({
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
}, { collection: 'recruiter-data' }
);

module.exports = mongoose.model('recruiterData', recruiter);