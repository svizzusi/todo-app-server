const todoSchema = require('../model/todoSchema.js');

module.exports = {
    getTodos: (req, res) => {
        const userId = req.params.id; // Extract the userId parameter from the request
        console.log(userId);  
        todoSchema.find({ userId: userId }) // Retrieve all Data from collection
        .then(Todo => res.json(Todo)) // Converts data to json and sends response
        .catch(err => {
            res.json(err) //send error response as json
            console.log(err) //log the error
        })
    },
    createTask: (req, res) => {
        todoSchema.create(req.body) // Add Data to the collection
        .then(Todo => res.json(Todo)) // Convert data to JSON and send response
        .catch(err => {
            res.json(err)
            console.log(err)
        })
    },
    getTask: (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        todoSchema.findById(id) // Retrieve data by its ID
        .then(Todo => res.json(Todo)) // Convert data to JSON and send response
        .catch(err => {
            res.json(err)
            console.log(err)
        })
    },
    updateTask: (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        todoSchema.findByIdAndUpdate(id, { // Find and update data by its ID
            taskName: req.body.taskName,
            taskDate: req.body.taskDate,
            taskTime: req.body.taskTime
        }) 
        .then(Todo => res.json(Todo)) // Convert data to JSON and send response
        .catch(err => {
            res.json(err)
            console.log(err)
        })
    },
    deleteTask: (req, res) => {
        const id = req.params.id // Extract the ID parameter from the request
        todoSchema.findByIdAndDelete(id 
        ) // Find and Delete data by its ID
        .then(Todo => res.json(Todo)) // Convert data to JSON and send response
        .catch(err => {
            res.json(err)
            console.log(err)
        })
    }
}