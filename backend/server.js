require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// Express app
const app = express()

// Acts as a middleware
app.use(express.json()) 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Route handler
app.use('/api/workouts' ,workoutRoutes)

// Listening to a certain port number (Listening requests)
app.listen(process.env.PORT, () => {
    console.log('Listening to port 4000!', process.env.PORT)
})