export class Task {
    id: string
    task: string
    status: string

    constructor(id: string, task: string, status: string) {
        this.id = id
        this.task = task
        this.status = status
    }
}