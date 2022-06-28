const mongoose = require('mongoose');

const recruiter = new mongoose.Schema({
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
}, { collection: 'recruiter-data'}
);

module.exports = mongoose.model('recruiterData', recruiter);