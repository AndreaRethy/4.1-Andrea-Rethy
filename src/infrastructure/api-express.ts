// import { Request, Response } from 'express';
const express = require('express');
require('./schemas/tasks.ts')

const app = express();
const toDoList = require('./todo.json');
const PORT = process.env.PORT ?? 1234;

app.disable('x-powered-by');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>To Do List: Andrea</h1>')
});

app.get('/todo', (req, res) => {
    res.json(toDoList);
});

app.post('/new-task', (req, res) => {
    const result = validateTodo(req.body)
    if (result.error) {
        return res.status(400).json({ error: result.error.message })
    }

    const newTask = {
        ...result.data,
        status: "to-do"
    }

    toDoList.push(newTask)

    res.status(201).json(newTask);
});

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>');
});

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});