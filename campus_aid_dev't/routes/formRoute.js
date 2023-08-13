// required the express modules
const express = require('express');

// required the controllers for routes
const {addForm, addContact, readForms, login, readContacts, addComplaint, readComplaint} = require('../controllers/formController');

// initialise router
const router = express.Router();

// add data to the API
router.post('/contact', addContact);

// login route
router.post('/login', login);

// add a request form
router.post('/add', addForm);

// read data from the API
router.get('/forms', readForms);

// pages for all forms submitted
router.get('/dashboard', (req, res)=>{
    res.redirect('../pages/forms/dashboard.html')
})

//reading contacts forms
router.get('/forms/contacts', readContacts);

//add complains forms
router.post('/complaint', addComplaint);
router.get('/forms/complaint', readComplaint);

// export router
module.exports = router;