const mongoose = require('mongoose')

const complainSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    registrationNumber: {
        type: String,
        required: [true, 'Please enter registration'],
    },
    program: {
        type: String,
        required: [true, 'Please enter program'],
    }, 
    level: {
        type: String,
        required: [true, 'Please enter level'],
    }, 
    telephone: {
        type: String,
        required: [true, 'Please enter telephone'],
    }, 
    department: {
        type: String,
        required: [true, 'Please enter department'],
    }, 
    faculty: {
        type: String,
        required: [true, 'Please enter faculty'],
    }, 
    code: {
        type: String,
        required: [true, 'Please enter code'],
    }, 
    course: {
        type: String,
        required: [true, 'Please enter course'],
    },
    lecturer: {
        type: String,
        required: [true, 'Please enter lecturer'],
    }, 
    year: {
        type: String,
        required: [true, 'Please enter year'],
    },
    semester: {
        type: String,
        required: [true, 'Please enter semester'],
    },
    session: {
        type: String,
        required: [true, 'Please enter session'],
    },
    grade: {
        type: String,
    },
    complaint: {
        type: String,
        required: [true, 'Please enter complaint'],
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Complain', complainSchema)