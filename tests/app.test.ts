import Task from '../src/domain/entities/Task';
import ToDoList from '../src/domain/entities/ToDoList';

// Green test
describe('New To Do List', () => {
  const task = new Task({ "task" : "test task" });
  const toDoList = new ToDoList([task]);

    test('should have methods defined', () => {
      expect(toDoList.addNewTask).toBeDefined();
      expect(toDoList.deleteTask).toBeDefined();
      expect(toDoList.updateTask).toBeDefined();
    });

    test('should call addNewTask with task2', () => {
      const task2 = new Task({ "task" : "test task 2" });
      toDoList.addNewTask(task2)

      expect(toDoList.toDoList[1].task).toBe("test task 2");
    })
  });