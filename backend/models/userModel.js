// Mongoose is required in order to create models and schemas
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

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

// Signing Up & Hashing Passwords
// Static Sign Up Method
userSchema.statics.signup = async function(email, password) {
    
    // Attach Validators
    if(!email || !password){
        throw Error('All fields must be filled!')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid!')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough!')
    }

    const exists = await this.findOne({ email })
    if(exists){
        throw Error('Email has already been used!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)