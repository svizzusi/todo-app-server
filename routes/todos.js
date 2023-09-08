const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos.js')


// Express route to the root route for fetching all tasks
router.get('/todo/:id', todosController.getTodos)

// Express route for creating a new task
router.post('/createtask', todosController.createTask)

// Express route for fetching a task by its ID coming from MongoDB
router.get('/gettask/:id', todosController.getTask)

// Express route for updating a task by its ID(From MongoDB)
router.put('/updatetask/:id', todosController.updateTask)

// Express route for deleting a task by its ID(From MongoDB)
router.delete('/deletetask/:id', todosController.deleteTask)

const todoRouter = router
module.exports = todoRouter