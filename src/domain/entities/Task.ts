// const crypto = require('node:crypto');
import { randomUUID } from 'crypto';

interface TaskData {
    task: string;
    [key: string]: any;
}

class Task {
    id: string;
    task: string;
    status: string;

    constructor(data: TaskData) {
        this.id = randomUUID();
        this.task = data.task;
        this.status = "to-do";
        Object.assign(this, data);
    }

    addNewTask(toDoList: Task[]): void {
        toDoList.push(this);
    }

    deleteTask(toDoList: Task[], index: number): void {
        toDoList.splice(index, 1)
    }
}

export default Task;
