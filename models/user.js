const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribed: {
        type: String,
        required: true
    },
    subDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);