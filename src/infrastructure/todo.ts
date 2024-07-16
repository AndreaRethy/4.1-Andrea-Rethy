import Task from '../domain/entities/Task';
import ToDoList from '../domain/entities/ToDoList';

let task1 = new Task({ "task" : "clean house" })
let task2 = new Task({ "task" : "practice coding" })
let task3 = new Task({ "task" : "walk the dog" })

let toDoList = new ToDoList([task1, task2, task3])

export default toDoList;