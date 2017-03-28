import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TodoModel } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
  createDb() {
    let todos: TodoModel[] = [
      {
        "id": "1",
        "desc": "登录实现",
        "completed": false
      },
      {
        "id": "2",
        "desc": "注册实现",
        "completed": false
      },
      {
        "id": "3",
        "desc": "搜索实现",
        "completed": false
      }
    ];

    return {todos};
  }
}
