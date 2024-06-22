const User = require('../models/userModel')

// Login User
const loginUser = async (req, res) => {
    res.json({mssg: 'Login User'})
}

// Sign-Up User
const signupUser = async (req, res) => {
    res.json({mssg: 'Sign Up User'})
}

module.exports = { 
    signupUser, 
    loginUser 
}