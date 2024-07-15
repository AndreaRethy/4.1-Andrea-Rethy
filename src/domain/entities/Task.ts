const crypto = require('node:crypto');
class Task {
    id = crypto.randomUUID();
    taskToDo: string;
    status: string;

    constructor(taskToDo: string) {
        this.taskToDo = taskToDo;
        this.status = "to-do";
    }

    addNewTask(toDoList: Task[]): void {
        toDoList.push(this);
    }
}

export default Task;
