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
      toDoList.addNewTask(task2);

      expect(toDoList.toDoList[1].task).toBe("test task 2");
    });

    test('should return 404', () => {
      expect(toDoList.deleteTask('superuniqueid')).toBe(404);
    });

    test('deletes new task', () => {
      const task3 = new Task({ "task" : "test task 3" });
      toDoList.addNewTask(task3);

      expect(toDoList.toDoList.length).toBe(3);
      expect(toDoList.deleteTask(task3.id)).toBe(200);
      expect(toDoList.toDoList.length).toBe(2);
    });

    test('updates task', () => {
      const task3 = new Task({ "task" : "test task 3" });
      toDoList.addNewTask(task3);

      expect(toDoList.toDoList.length).toBe(3);
      expect(toDoList.updateTask(task3.id, { "task" : "test task 3", "status": "done" })).toBe(2);
      expect(toDoList.toDoList[2].status).toBe("done")
    });
  });