const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please enter a username'],
        uniqued: true
    },
    password: {
        type: String, 
        required: [true, 'Please enter a password']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)