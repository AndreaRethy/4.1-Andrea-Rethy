const crypto = require('node:crypto');
class Task {
    id = crypto.randomUUID();
    task: string;
    status: string;

    constructor(task: string) {
        this.task = task;
        this.status = "to-do";
    }

    addNewTask(toDoList: Task[]): void {
        toDoList.push(this);
    }
}

export default Task;
