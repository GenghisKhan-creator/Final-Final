// required mongoose module
const mongoose = require('mongoose');

// function to connection the mongoDB databse
const connectDB = async () => {
    // try catch control
    const MONGO_URI = "mongodb+srv://ahmed:Nbehedimah047@cluster0.axxvyg6.mongodb.net/campus_aid?retryWrites=true&w=majority"
    try {
        // connected to the database 
        const connect  = await mongoose.connect(MONGO_URI);
        // console log database host url
        console.log(`Database up and running ${connect.connection.host}`.blue.bgRed);
    } catch (error) {
        // console error if not able to connect
        console.log(error);
        // exit process 
        process.exit(1)
    }
}


module.exports = connectDB;