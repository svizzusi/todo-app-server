// Install and import packages
const express = require('express') //Require express module
const app = express() //Create the instance of express
const mongoose = require('mongoose') //Require the mongoose module
const cors = require('cors') //Cross Origin Resource Sharing - allows frontend to talk to the server
const todoModel = require('./model/todoSchema.js') //Require the schema data structure
const userModel = require('./model/userSchema.js') //Require the schema data structure
require('dotenv').config({path: './config/.env'}) //require the environment variable

const userRoutes = require('./routes/users.js')
const todoRoutes = require('./routes/todos.js')

app.use(cors()) //Use cors middleware in the express app
app.use(express.json()) // Middleware: Parse incoming JSON data

app.use('/users', userRoutes)
app.use('/todos', todoRoutes)

// Establish a connection to the database and start the server
mongoose.connect(process.env.DB_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & listening on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err) // Log any database connection errors
    })