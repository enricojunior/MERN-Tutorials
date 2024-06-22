// Mongoose is required in order to create models and schemas
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Create a User Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true // This is required in order to prevent duplicate email registry
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)