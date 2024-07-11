const { Task } = require('../domain/entities/Task.js')
const express = require('express');
const crypto = require('node:crypto');
const { validateTodo, validatePartialTodo } = require('./schemas/tasks.ts');

const app = express();
const toDoList = require('../infrastructure/todo.json');
const PORT = process.env.PORT ?? 1234;

app.disable('x-powered-by');
app.use(express.json());

// GET
app.get('/', (req, res) => {
    res.send('<h1>To Do List: Andrea</h1>')
});

app.get('/todo', (req, res) => {
    res.json(toDoList);
});

// POST
app.post('/new-task', (req, res) => {
    const result = validateTodo(req.body)
    if (result.error) {
        return res.status(400).json({ error: result.error.message })
    }

    const newTask = {
        id: crypto.randomUUID(),
        ...result.data,
        status: "to-do"
    }

    // const newTask = new Task(result.data)

    toDoList.push(newTask)

    res.status(201).json(newTask);
});

// DELETE
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params
    const taskIndex = toDoList.findIndex(task => task.id === id)
  
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Task not found' })
    }
  
    toDoList.splice(taskIndex, 1)
  
    return res.json({ message: 'Task deleted' })
});

// PATCH request
app.patch('/todo/:id', (req, res) => {
    const result = validatePartialTodo(req.body)
    
    if (!result.success) {
        return res.status(404).json({ error: JSON.parse(result.error.message) }) 
    }

    const { id } = req.params
    const taskIndex = toDoList.findIndex(task => task.id === id)
    
    if (taskIndex === -1) return res.status(404).json({ message: 'task not found' })

    const updateTask = {
        ...toDoList[taskIndex],
        ...result.data
    }

    toDoList[taskIndex] = updateTask

    return res.json(updateTask)
});

// NOT FOUND
app.use((req, res) => {
    res.status(404).send('<h1>404</h1>');
});

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});