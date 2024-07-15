// const crypto = require('node:crypto');
import { randomUUID } from 'crypto';

class Task {
    id: string;
    task: string;
    status: string;

    constructor(task: string) {
        this.id = randomUUID();
        this.task = task;
        this.status = "to-do";
    }

    addNewTask(toDoList: Task[]): void {
        toDoList.push(this);
    }
}

export default Task;
