const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    points: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;