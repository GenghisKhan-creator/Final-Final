// requiring relevant modules
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

// port to run server on
const port = process.env.PORT || 4000

// initialised express
const app = express()

// connect to database
connectDB()

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')


// adding static files
app.use(express.static('public/pages'))
app.use(express.static('public'))
app.use(express.static('public/js'))
// enable handling of json files
app.use(express.json())
app.use(cookieParser())
// enable handling of data from forms
app.use(express.urlencoded({extended: false}))
// enable handling issues with CORS
app.use(cors())

// routes
app.use('/api' ,require('./routes/formRoute'))
// middleware to handle errors
app.use(errorHandler)
// initialise server
app.listen(port, ()=>{
    console.log(`Server is active on port ${port}`)
})