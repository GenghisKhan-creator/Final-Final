const mongoose = require('mongoose');


const formSchema = mongoose.Schema({
    studentId : {
        type: String,
        required: [true, 'Please enter your student ID']
    }, 
    studentName: {
        type: String,
        required: [true, 'Please enter a reason']
    },
    currentSemester:{
        type: String,
        required: [true, 'Please enter your current semester']
    },
    currentProgramme: {
        type: String,
        required: [true, 'Please enter a programme']
    }, 
    level: {
        type: String,
        required: [true, 'Please enter your current level']
    },
    programmeRequested: {
        type: String,
        required: [true, 'Please enter a programme change']
    }, 
    reason: {
        type: String,
        required: [true, 'Please enter a reason']
    },
    telephone:{
        type: String,
        required: [true, 'Please enter a telephone']
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Form', formSchema);