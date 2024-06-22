require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/users')

// Express app
const app = express()

// Acts as a middleware
app.use(express.json()) 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Route handler
app.use('/api/workouts' , workoutRoutes)
app.use('/api/user', userRoutes)

// Connecting to DB (Database)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening to a certain port number (Listening requests)
        app.listen(process.env.PORT, () => {
            console.log('Connected to the DB & Listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error) // This might happen if the URI is not correct
    })