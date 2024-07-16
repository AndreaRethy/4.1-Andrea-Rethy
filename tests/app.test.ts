import Task from '../src/domain/entities/Task';
import ToDoList from '../src/domain/entities/ToDoList';

// Green test
describe('New To Do List', () => {
  const task = new Task({ "task" : "test task" });
  const toDoList = new ToDoList([task]);

    test('should have addNewTask defined', () => {
      expect(toDoList.addNewTask).toBeDefined();
      expect(toDoList.deleteTask).toBeDefined();
      expect(toDoList.updateTask).toBeDefined();
    });
  });