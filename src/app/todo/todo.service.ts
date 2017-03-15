import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TodoModel } from './todo.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  // private apiUrl = 'api/todos';
  private apiUrl = 'http://localhost:3000/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  addTodo(desc: string): Promise<TodoModel> {
    let todo = {
      id: Math.random(),
      desc: desc,
      completed: false
    };

    return this.http
      .post(this.apiUrl, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as TodoModel)
      .catch(this.handleError);
  }

  toggleTodo(todo: TodoModel): Promise<TodoModel> {
    const url = `${this.apiUrl}/${todo.id}`;
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
      .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError);
  }

  deleteTodoById(id: string): Promise<void> {
    const url = `${this.apiUrl}/${id}`;

    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getTodos(): Promise<TodoModel[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json() as TodoModel[])
      .catch(this.handleError);
  }

  filterTodos(filter: string): Promise<TodoModel[]> {
    switch (filter) {
      case 'Active':
        return this.http
          .get(`${this.apiUrl}?completed=false`)
          .toPromise()
          .then(res => res.json() as TodoModel[])
          .catch(this.handleError);
      case 'Completed':
        return this.http
          .get(`${this.apiUrl}?completed=true`)
          .toPromise()
          .then(res => res.json() as TodoModel[])
          .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
