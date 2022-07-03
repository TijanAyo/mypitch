const mongoose = require('mongoose')
require('dotenv').config()

const dbURI = process.env.dbURI

async function connectDB() {
    try{
        await mongoose.connect(dbURI)
        console.log(`MongoDB connected`)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }   
}

module.exports = connectDB