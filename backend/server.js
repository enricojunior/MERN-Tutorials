require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// Route handler
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the application..'})
})

// Listening to a certain port number (Listening requests)
app.listen(process.env.PORT, () => {
    console.log('Listening to port 4000!')
})