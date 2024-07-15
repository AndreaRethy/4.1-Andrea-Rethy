const crypto = require('node:crypto');

class Task {
    id: string;
    taskToDo: string;
    status: string;

    constructor(taskToDo: string) {
        this.id = crypto.randomUUID();
        this.taskToDo = taskToDo;
        this.status = "to-do";
    }

    addNewTask(toDoList: Task[]): void {
        toDoList.push(this);
    }
}

export default Task;
