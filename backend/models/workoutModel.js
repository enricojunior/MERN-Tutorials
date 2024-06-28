// Mongoose is used to create models and schemas
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Create a new workout schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true}) // When we try to create a new document, it automatically adds a created app property for us to 
                       // say when the document was created which is nice

module.exports = mongoose.model('Workout', workoutSchema)