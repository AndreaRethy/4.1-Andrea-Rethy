import Task from './Task';

interface TaskData {
    task: string;
    [key: string]: any;
}

class ToDoList {
    toDoList: Task[];

    constructor(toDoList: Task[]) {
        this.toDoList = toDoList
    }

    addNewTask(task: Task): void {
        this.toDoList.push(task);
    }

    deleteTask(id: string): number {

        const taskIndex = this.toDoList.findIndex(task => task.id === id)
  
        if (taskIndex === -1) {
            return 404
        } else {
            this.toDoList.splice(taskIndex, 1)
            return 200
        }
    }

    updateTask(id: string, data: TaskData): number {
        const taskIndex = this.toDoList.findIndex(task => task.id === id)
    
            if (taskIndex !== -1) {
                const updateTask = {
                    ...this.toDoList[taskIndex],
                    ...data
                }
                this.toDoList[taskIndex] = updateTask
                
                // return this.toDoList[taskIndex]
                return taskIndex
            } 
            
            return taskIndex
            
        }
}

export default ToDoList;