const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')
const Form = require('../models/formModel')
const User = require('../models/userModel')
const ContactForm = require('../models/contactModel')
const Complain = require('../models/complainModel')


// controller for adding new forms
// @desc        Add a form
// @route      Post /api/add
// @access     public
const addForm = asyncHandler(async(req, res) =>{
    const body = req.body
    if(!body.studentId || !body.studentName || !body.currentSemester || !body.level || !body.programmeRequested || !body.reason || !body.telephone){
        res.status(400)
        throw new Error('Make sure all fields are filled')
        res.redirect('/pages/views/login.html')
    }
    await Form.create(
        body
    )
    res.render('../views/messageForm',{
        name: req.body.studentName.split(' ')[0]
    })
})


// @desc        Add contact us form
// @route      Post /api/contact
// @access     public
const addContact = asyncHandler(async(req, res) => {

    let {fullName, email, message} = req.body

    if(!fullName){
        res.status(203)
        throw new Error('Fill your name');
    }

    await ContactForm.create({
        fullName,
        email,
        message
    })

    res.render('../views/success')
})


// @Desc login admin
// @Route /api/login
// access Private
const login = asyncHandler(async(req, res) => {
    const {userName, password } = req.body

    if(!userName || !password){
        res.status('400')
        throw new Error('bad request')
    }

    let getUser = await User.findOne({userName})

    if(!getUser){
        res.status(401)
        throw new Error('User does not exist')
    }

    

    let token = await jwt.sign({getUser}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })

    if(userName == getUser.userName && password == getUser.password){

        res.cookie('jwt', token)

        res.redirect('/api/dashboard')

    }else{
        res.status(401)
    res.render('../views/error', {
        msg: 'Incorrect username or password'
    })
}

})

//function to read from database
// @desc        Register a new user
// @route      GET /api/dashboard
// @access     Access
const readContacts = asyncHandler(async(req, res) => {

    try {
        let allContacts = await ContactForm.find()
        
        res.json({
            allContacts
        })
        
    } catch (error) {
        res.status(401)
        res.json({
            error
        })
    }

})


//function to read from database
// @desc        Register a new user
// @route      GET /api/dashboard
// @access     Access
const readForms = asyncHandler(async(req, res) =>{
    // get al forms from database
    const allForms = await Form.find()

    if(!allForms){
        res.status(401)
        throw new Error('Unauthorised user')
    }

    res.json({
        allForms
    })

})

//function to read from database
// @desc        Register a new user
// @route      GET /api/dashboard
// @access     Access
const addComplaint = asyncHandler(async(req, res) => {
    const {fullName, registrationNumber, program, level, telephone, department, faculty, code, course, lecturer, year, semester, session, grade ,complaint } = req.body

    if(!fullName || !registrationNumber || !program || !level || !telephone || !department || !faculty || !code || !course || !lecturer || !year || !semester || !session || !complaint){
        res.status(203)
        throw new Error('Fill your name');
    }

    const body = req.body

    let complain = await Complain.create({
        fullName,
         registrationNumber,
          program,
           level, 
           telephone,
            department, 
            faculty, 
            code, 
            course, 
            lecturer, 
            year, 
            semester, 
            session, 
            grade,
            complaint
    })

    res.render('../views/success')
}
)

const readComplaint =asyncHandler(async(req, res) => {

    let allComplaints = await Complain.find({})

    res.json({
        complains: allComplaints
    })
})


// exporting controllers
module.exports = {
    addForm, 
    addContact, 
    readForms,
    login,
    readContacts,
    addComplaint, 
    readComplaint
}