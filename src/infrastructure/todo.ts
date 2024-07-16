import Task from '../domain/entities/Task';
import ToDoList from '../domain/entities/ToDoList';

let task1 = new Task({ "task" : "clean house" })
let task2 = new Task({ "task" : "practice coding" })
let task3 = new Task({ "task" : "walk the dog" })

// let toDoList: Task[] = [
//     task1, task2, task3
// ]
let toDoList = new ToDoList([task1, task2, task3])

export default toDoList;

// let toDoList: Task[] = [
//     {
//         "id": "4b196eb2-7292-4c44-bc53-c6b367b4a0f1",
//         "task": "clean house",
//         "status": "to-do"
//     },
//     {
//         "id": "c4b2eb63-60ae-44ea-a6e2-52666a0c3a0f",
//         "task": "practice coding",
//         "status": "done"
//     },
//     {
//         "id": "11b6d2f1-917a-4071-b21f-c30eebda6e85",
//         "task": "walk the dog",
//         "status": "done"
//     }
// ]