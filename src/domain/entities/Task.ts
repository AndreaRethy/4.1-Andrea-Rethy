const crypto = require('node:crypto');
class Task {
    id = crypto.randomUUID()
    task: string
    status: "to-do"

    constructor(task: string) {
        this.task = task
    }
}

export default Task