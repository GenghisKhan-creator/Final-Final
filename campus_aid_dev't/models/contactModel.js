const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String, 
        required: [true, 'Please enter your email']
    },
    message: {
        type: String,
        required: [true, 'Please enter a message']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('ContactForm', contactSchema)