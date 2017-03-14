import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TodoModel } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
  createDb() {
    let todos: TodoModel[] = [
      {id: '0', desc: 'menory', completed: false},
      {id: '1', desc: 'dbservice', completed: false}
    ];

    return {todos};
  }
}
